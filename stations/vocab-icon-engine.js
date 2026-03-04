// vocab-icon-engine.js
// POS-aware Lucide icon engine for Vocabulary Station
//
// Usage:
//   import { getIconName } from "./vocab-icon-engine.js";
//   const icon = getIconName(wordOrPhrase, pos); // pos: "n" | "v" | "adj" | ""
//
// Design goals:
// - Prefer EXACT matches for precision (best for vocabulary learning)
// - Allow safe phrase/synonym matching (CONTAINS_RULES) without “substring accidents”
// - Provide consistent POS-based fallbacks so you don’t get random circles
// - Optional debug mode to print missing words in console (helps bulk-fill mappings)

const DEBUG_MISSING = false; // set true to log missing mappings

/* ===============================
   1) EXACT: highest precision
   (add your vocabulary here)
=================================*/
const EXACT = {
  // ===== Unit 1 verbs/opposites =====
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
  receive: "inbox",

  // ===== Feelings / adjectives =====
  happy: "smile",
  unhappy: "frown",
  worried: "badge-alert",
  bored: "minus-circle",
  scared: "alert-triangle",
  surprised: "zap",
  tired: "battery-low",
  excited: "star",
  relaxed: "coffee",

  // ===== Senses / actions =====
  smell: "wind",
  taste: "utensils",
  touch: "hand",
  hearing: "ear",
  sight: "eye",

  // ===== Jobs / people =====
  teacher: "graduation-cap",
  engineer: "wrench",
  lawyer: "scale",
  manager: "briefcase",
  dentist: "stethoscope",
  hairdresser: "scissors",
  police: "shield",
  detective: "search",
  cook: "chef-hat",
  astronaut: "rocket",
  builder: "hammer",

  // performer (you asked for a “person” performer icon)
  performer: "person-standing",

  // ===== Body / fitness =====
  brain: "brain",
  heart: "heart",
  lungs: "wind",
  muscles: "dumbbell",
  bones: "bone",
  injury: "bandage",
  stretch: "move",
  train: "dumbbell",

  // ===== Common objects =====
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
  music: "music",
  game: "gamepad-2",
  sport: "trophy"
};

/* ===============================
   2) CONTAINS_RULES: safe phrase
   matching (avoid short substrings!)
=================================*/
const CONTAINS_RULES = [
  // phrases first
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" },
  { keys: ["kite flying"], icon: "wind" },
  { keys: ["free running"], icon: "person-running" },

  // safe longer keys
  { keys: ["photograph", "photographer", "photo"], icon: "camera" },
  { keys: ["paint", "painter"], icon: "paintbrush" },
  { keys: ["sculpture", "sculptor", "sculpt"], icon: "cube" },
  { keys: ["designer", "design"], icon: "pencil-ruler" },

  // activities (safe-ish)
  { keys: ["cycling"], icon: "bike" },
  { keys: ["jogging"], icon: "person-running" },
  { keys: ["rowing"], icon: "waves" }
];

/* ===============================
   3) CATEGORY_RULES: consistent
   fallback by meaning hints
=================================*/
const CATEGORY_RULES = [
  // emotion adjectives
  { keys: ["happy", "unhappy", "worried", "bored", "scared", "tired", "excited", "relaxed"], icon: "smile" },

  // money verbs
  { keys: ["buy", "sell", "borrow", "lend", "save", "spend"], icon: "credit-card" },

  // learning/school
  { keys: ["school", "learn", "learning", "study", "book"], icon: "book-open" },

  // sport/fitness
  { keys: ["sport", "exercise", "training", "train", "fitness"], icon: "dumbbell" },

  // art
  { keys: ["art", "paint", "design", "music", "dance", "photo"], icon: "palette" },

  // tech
  { keys: ["computer", "laptop", "phone", "online"], icon: "monitor" }
];

function cleanWord(word) {
  return String(word ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")     // remove parentheses content
    .replace(/[^a-z ]/g, " ")    // keep letters/spaces only
    .replace(/\s+/g, " ")        // collapse spaces
    .trim();
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
  // POS-consistent fallbacks (better than "circle" for learning)
  if (pos === "adj") return "smile";
  if (pos === "v") return "move";
  if (pos === "n") return "box";
  return "circle";
}

export function getIconName(word, pos = "") {
  const cleaned = cleanWord(word);
  const p = String(pos || "").toLowerCase();

  if (!cleaned) return posFallback(p);

  // 1) exact match
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // 2) safe phrase/synonym match
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // 3) category fallback by meaning hints
  const catIcon = matchRules(cleaned, CATEGORY_RULES);
  if (catIcon) return catIcon;

  // 4) POS-aware fallback + optional debug
  if (DEBUG_MISSING) {
    console.warn("[vocab-icon-engine] Missing icon for:", { word, cleaned, pos: p });
  }
  return posFallback(p);
}
