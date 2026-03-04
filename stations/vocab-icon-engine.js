// stations/vocab-icon-engine.js
console.log("vocab-icon-engine loaded: 2026-03-04 semantic-db v2");

import { SEMANTIC_CATEGORIES, WORD_TO_CATEGORY, VARIANTS } from "./vocab-semantic-db.js";

const DEBUG_MISSING = false;

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

// Keep EXACT for special one-off items that should not be grouped
const EXACT = {
  // Verbs & opposites (from screenshot)
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

const CONTAINS_RULES = [
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" }
];

function cleanWord(word) {
  return String(word ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function canonicalize(cleaned) {
  if (!cleaned) return "";
  return (VARIANTS && VARIANTS[cleaned]) ? VARIANTS[cleaned] : cleaned;
}

function matchRules(cleaned, rules) {
  for (const rule of rules) {
    for (const k of rule.keys) {
      if (cleaned.includes(k)) return rule.icon;
    }
  }
  return null;
}

function posFallback(pos) {
  if (pos === "adj") return "smile";
  if (pos === "v") return "move";
  if (pos === "n") return "box";
  return "circle";
}

function semanticLookup(cleaned) {
  const key = canonicalize(cleaned);
  const catKey = WORD_TO_CATEGORY[key];
  if (!catKey) return null;
  const cat = SEMANTIC_CATEGORIES[catKey];
  if (!cat) return null;
  return { category: catKey, icon: cat.icon, color: cat.color };
}

export function getAccentColor(word = "", setId = "") {
  const cleaned = cleanWord(word);
  const semantic = semanticLookup(cleaned);
  if (semantic?.color) return semantic.color;

  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

export function getIconName(word, pos = "", setId = "") {
  const cleaned = canonicalize(cleanWord(word));
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  // semantic DB first (precision)
  const semantic = semanticLookup(cleaned);
  if (semantic?.icon) return semantic.icon;

  // then exact
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // then contains rules
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // then set fallback
  if (sid && Object.prototype.hasOwnProperty.call(SET_FALLBACK, sid)) {
    const fallbackIcon = SET_FALLBACK[sid];
    if (DEBUG_MISSING) console.warn("[vocab-icon-engine] Using SET fallback:", { word, cleaned, pos: p, setId: sid, icon: fallbackIcon });
    return fallbackIcon;
  }

  // finally pos fallback
  const fallback = posFallback(p);
  if (DEBUG_MISSING) console.warn("[vocab-icon-engine] Missing icon (POS fallback):", { word, cleaned, pos: p, setId: sid, icon: fallback });
  return fallback;
}
