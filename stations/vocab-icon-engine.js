// stations/vocab-icon-engine.js
// Vocabulary Icon Engine — Stable Version
// Priority: semantic → exact → contains → set fallback → POS fallback

import { SEMANTIC_CATEGORIES, WORD_TO_CATEGORY, VARIANTS } from "./vocab-semantic-db.js";

const DEBUG = false;

/* ================================
   SET COLOR ACCENTS
================================ */

const SET_ACCENT = {
  u1_verbs_opposites: "#0ea5e9",
  u1_feelings: "#f97316",
  u2_materials: "#64748b",
  u2_art: "#ec4899",
  u3_outdoor_activities: "#3b82f6",
  u3_outdoor_events: "#8b5cf6",
  u4_personality: "#f59e0b",
  u5_senses: "#06b6d4",
  u6_body_fitness: "#ef4444",
  u7_learning: "#22c55e",
  u8_jobs: "#a855f7"
};

/* ================================
   SET FALLBACK ICONS
================================ */

const SET_FALLBACK = {
  u1_verbs_opposites: "arrow-left-right",
  u1_feelings: "smile",
  u2_materials: "layers",
  u2_art: "palette",
  u3_outdoor_activities: "person-standing",
  u3_outdoor_events: "ticket",
  u4_personality: "users",
  u5_senses: "eye",
  u6_body_fitness: "heart",
  u7_learning: "graduation-cap",
  u8_jobs: "briefcase"
};

/* ================================
   EXACT WORD ICONS
================================ */

const EXACT = {

  agree: "handshake",
  disagree: "x-circle",
  appear: "sparkles",
  disappear: "wind",
  borrow: "hand-coins",
  lend: "hand-coins",
  buy: "shopping-cart",
  sell: "badge-dollar-sign",
  connect: "link",
  disconnect: "unlink",
  lose: "x",
  win: "trophy",
  save: "piggy-bank",
  spend: "credit-card",
  send: "send",
  receive: "inbox"

};

/* ================================
   CONTAINS RULES
================================ */

const CONTAINS_RULES = [
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" }
];

/* ================================
   CLEAN WORD
================================ */

function cleanWord(word) {
  return String(word ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ================================
   VARIANT NORMALIZATION
================================ */

function canonicalize(cleaned) {
  if (!cleaned) return "";
  return VARIANTS && VARIANTS[cleaned]
    ? VARIANTS[cleaned]
    : cleaned;
}

/* ================================
   CONTAINS MATCH
================================ */

function matchContains(cleaned) {
  for (const rule of CONTAINS_RULES) {
    for (const key of rule.keys) {
      if (cleaned.includes(key)) return rule.icon;
    }
  }
  return null;
}

/* ================================
   POS FALLBACK
================================ */

function posFallback(pos) {

  if (pos === "adj") return "smile";
  if (pos === "v") return "move";
  if (pos === "n") return "box";

  return "circle";
}

/* ================================
   SEMANTIC LOOKUP
================================ */

function semanticLookup(cleaned) {

  const key = canonicalize(cleaned);

  const catKey = WORD_TO_CATEGORY[key];

  if (!catKey) return null;

  const category = SEMANTIC_CATEGORIES[catKey];

  if (!category) return null;

  return {
    category: catKey,
    icon: category.icon,
    color: category.color
  };

}

/* ================================
   PUBLIC — ACCENT COLOR
================================ */

export function getAccentColor(word = "", setId = "") {

  const cleaned = cleanWord(word);

  const semantic = semanticLookup(cleaned);

  if (semantic && semantic.color) {
    return semantic.color;
  }

  return SET_ACCENT[setId] || "#2563eb";
}

/* ================================
   PUBLIC — ICON NAME
================================ */

export function getIconName(word = "", pos = "", setId = "") {

  const cleaned = canonicalize(cleanWord(word));
  const p = String(pos || "").toLowerCase();

  if (!cleaned) return posFallback(p);

  /* semantic database */

  const semantic = semanticLookup(cleaned);

  if (semantic && semantic.icon) {
    return semantic.icon;
  }

  /* exact match */

  if (EXACT[cleaned]) {
    return EXACT[cleaned];
  }

  /* contains rules */

  const containsIcon = matchContains(cleaned);

  if (containsIcon) {
    return containsIcon;
  }

  /* set fallback */

  if (setId && SET_FALLBACK[setId]) {

    if (DEBUG) {
      console.warn("SET fallback used:", word, setId);
    }

    return SET_FALLBACK[setId];
  }

  /* POS fallback */

  return posFallback(p);

}
