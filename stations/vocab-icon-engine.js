// vocab-icon-engine.js
// Meaning-first icon + color engine for Vocabulary Station.
//
// REQUIRED files/paths (must be in the same folder "stations/"):
// - stations/vocab-icon-engine.js  (this file)
// - stations/vocab-semantic-db.js  (semantic DB file you create)
// - stations/vocabulary.html       (imports this engine)
//
// Exports:
// - getIconName(word, pos, setId)   -> lucide icon name
// - getAccentColor(word, setId)     -> CSS color string
//
// Notes:
// - If cards disappear, open DevTools Console: a red module error means a missing file path.
// - If an icon name doesn’t exist in your Lucide version, that icon may render blank.

console.log("vocab-icon-engine loaded: 2026-03-04 semantic-db v1");

import { SEMANTIC_CATEGORIES, WORD_TO_CATEGORY, VARIANTS } from "./vocab-semantic-db.js";

const DEBUG_MISSING = false;

/* ===============================
   SET COLORS (category fallback)
=================================*/
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

/* ===============================
   SET FALLBACK ICONS
=================================*/
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

/* ===============================
   EXACT ICONS (non-semantic)
   Keep this small; prefer semantic DB for meaning.
=================================*/
const EXACT = {
  // Outdoor events
  festival: "sparkles",
  market: "shopping-bag",
  "sports event": "trophy",
  concert: "music",

  // Senses
  sight: "eye",
  hearing: "ear",
  smell: "wind",
  taste: "utensils",
  touch: "hand",

  // Common
  book: "book",
  school: "school",
  computer: "monitor",
  laptop: "laptop",
  phone: "smartphone",
  bike: "bike",
  car: "car",
  tree: "tree-pine",
  sun: "sun",
  hospital: "hospital",
  sport: "trophy",
  game: "gamepad-2"
};

/* ===============================
   CONTAINS RULES (safe matching)
=================================*/
const CONTAINS_RULES = [
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" },
  { keys: ["free running"], icon: "person-running" },
  { keys: ["kite flying"], icon: "wind" },
  { keys: ["photographer", "photograph"], icon: "camera" },
  { keys: ["painter", "painting"], icon: "paintbrush" },
  { keys: ["sculpture", "sculptor"], icon: "cube" }
];

/* ===============================
   HELPERS
=================================*/
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
  // semantic DB is optional but recommended
  const key = canonicalize(cleaned);
  const catKey = WORD_TO_CATEGORY ? WORD_TO_CATEGORY[key] : null;
  if (!catKey) return null;

  const cat = SEMANTIC_CATEGORIES ? SEMANTIC_CATEGORIES[catKey] : null;
  if (!cat) return null;

  return { category: catKey, icon: cat.icon, color: cat.color };
}

/* ===============================
   EXPORTS
=================================*/
export function getAccentColor(word = "", setId = "") {
  const cleaned = cleanWord(word);
  const semantic = semanticLookup(cleaned);

  if (semantic && semantic.color) return semantic.color;

  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

export function getIconName(word, pos = "", setId = "") {
  const cleaned0 = cleanWord(word);
  const cleaned = canonicalize(cleaned0);
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  // 1) semantic DB (best precision)
  const semantic = semanticLookup(cleaned);
  if (semantic && semantic.icon) return semantic.icon;

  // 2) exact match
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // 3) contains rules
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // 4) set fallback
  if (sid && Object.prototype.hasOwnProperty.call(SET_FALLBACK, sid)) {
    const fallbackIcon = SET_FALLBACK[sid];
    if (DEBUG_MISSING) {
      console.warn("[vocab-icon-engine] Using SET fallback:", {
        word,
        cleaned,
        pos: p,
        setId: sid,
        icon: fallbackIcon
      });
    }
    return fallbackIcon;
  }

  // 5) POS fallback
  const fallback = posFallback(p);
  if (DEBUG_MISSING) {
    console.warn("[vocab-icon-engine] Missing icon (POS fallback):", {
      word,
      cleaned,
      pos: p,
      setId: sid,
      icon: fallback
    });
  }
  return fallback;
}
