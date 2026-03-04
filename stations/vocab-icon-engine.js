// stations/vocab-icon-engine.js

console.log("vocab-icon-engine loaded: improved mapping");

import { SEMANTIC_CATEGORIES, WORD_TO_CATEGORY, VARIANTS } from "./vocab-semantic-db.js";

const DEBUG_MISSING = false;

/* ------------------------------------------------
CATEGORY COLORS
------------------------------------------------ */

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

/* ------------------------------------------------
FALLBACK ICONS PER SET
------------------------------------------------ */

const SET_FALLBACK = {
  u1_verbs_opposites: "arrow-left-right",
  u1_feelings: "smile",
  u2_materials: "box",
  u2_art: "palette",
  u3_outdoor_activities: "activity",
  u3_outdoor_events: "ticket",
  u4_personality: "users",
  u5_senses: "eye",
  u6_body_fitness: "heart",
  u7_learning: "graduation-cap",
  u8_jobs: "briefcase"
};

/* ------------------------------------------------
EXACT WORD → ICON MAPPING
------------------------------------------------ */

const EXACT = {

  /* VERBS */

  agree: "handshake",
  disagree: "x-circle",
  appear: "sparkles",
  disappear: "wind",
  borrow: "hand-coins",
  lend: "hand-heart",
  buy: "shopping-cart",
  sell: "badge-dollar-sign",
  connect: "link",
  disconnect: "unlink",
  lose: "trending-down",
  win: "trophy",
  save: "piggy-bank",
  spend: "credit-card",
  send: "send",
  receive: "inbox",

  /* FEELINGS */

  happy: "smile",
  unhappy: "frown",
  scared: "ghost",
  surprised: "sparkles",
  tired: "battery-low",
  bored: "meh",
  excited: "star",
  worried: "alert-circle",
  relaxed: "coffee",

  /* MATERIALS */

  cardboard: "box",
  cotton: "flower",
  glass: "wine",
  leather: "boot",
  metal: "hammer",
  paper: "file-text",
  plastic: "package",
  wood: "tree-pine",
  wool: "circle-dot",

  /* OUTDOOR ACTIVITIES */

  cycling: "bike",
  jogging: "activity",
  rowing: "waves",
  "working out": "dumbbell",
  "kite flying": "wind",
  "free running": "zap",

  /* EVENTS */

  festival: "party-popper",
  market: "shopping-bag",
  concert: "music",
  "sports event": "trophy",

  /* PERSONALITY */

  patient: "clock",
  lazy: "bed",
  generous: "heart",
  polite: "smile",
  confident: "thumbs-up",
  kind: "heart-handshake",
  mean: "angry",
  rude: "message-square-x",

  /* SENSES */

  sight: "eye",
  hearing: "ear",
  smell: "wind",
  taste: "utensils",
  touch: "hand",

  /* BODY */

  brain: "brain",
  heart: "heart",
  lungs: "activity",
  muscles: "dumbbell",
  bones: "bone",
  injury: "bandage",
  stretch: "move",
  train: "activity",

  /* LEARNING */

  achieve: "trophy",
  achievement: "award",
  decide: "check-circle",
  decision: "check",
  learn: "book-open",
  learning: "graduation-cap",
  solve: "puzzle",
  solution: "lightbulb",

  /* JOBS */

  astronaut: "rocket",
  builder: "hammer",
  dentist: "activity",
  engineer: "wrench",
  musician: "music",
  teacher: "graduation-cap",
  lawyer: "scale",
  manager: "briefcase"
};

/* ------------------------------------------------
CONTAINS RULES
------------------------------------------------ */

const CONTAINS_RULES = [
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" },
  { keys: ["sports"], icon: "trophy" },
  { keys: ["market"], icon: "shopping-bag" }
];

/* ------------------------------------------------
UTILITIES
------------------------------------------------ */

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
  return VARIANTS?.[cleaned] || cleaned;
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

/* ------------------------------------------------
PUBLIC FUNCTIONS
------------------------------------------------ */

export function getAccentColor(word = "", setId = "") {

  const cleaned = cleanWord(word);
  const semantic = semanticLookup(cleaned);

  if (semantic?.color) return semantic.color;

  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

/* ------------------------------------------------
ICON RESOLUTION
------------------------------------------------ */

export function getIconName(word, pos = "", setId = "") {

  const cleaned = canonicalize(cleanWord(word));
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  /* EXACT match first */

  if (EXACT[cleaned]) {
    return EXACT[cleaned];
  }

  /* semantic DB */

  const semantic = semanticLookup(cleaned);
  if (semantic?.icon) return semantic.icon;

  /* contains rules */

  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  /* set fallback */

  if (sid && SET_FALLBACK[sid]) {
    return SET_FALLBACK[sid];
  }

  /* POS fallback */

  const fallback = posFallback(p);

  if (DEBUG_MISSING) {
    console.warn("[vocab-icon-engine] missing icon", {
      word,
      cleaned,
      pos: p,
      setId: sid
    });
  }

  return fallback;
}
