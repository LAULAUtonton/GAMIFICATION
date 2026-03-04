// vocab-icon-engine.js
// POS + setId aware Lucide icon engine for Vocabulary Station
//
// Expected usage (after you update vocabulary.js):
//   getIconName(word, pos, setId)
// where:
//   pos   = "n" | "v" | "adj" | ""     (part of speech)
//   setId = string like "u5_senses"
//
// Features implemented:
// - High precision via EXACT mappings (best for vocabulary learning)
// - Safe phrase matching (only long keys, avoids substring accidents)
// - Consistent set/category fallback using setId
// - POS-aware final fallback (adj/v/n render differently)
// - Debug logs when fallback happens
// - Color support: export getAccentColor(setId) so vocabulary.html can color icons per category

const DEBUG_MISSING = false; // set true to log fallback usage

/* ===============================
   SET ACCENT COLORS (for icons)
   Use in vocabulary.html:
     style="color:${getAccentColor(card.setId)}"
=================================*/
const SET_ACCENT = {
  // UNIT 1
  u1_verbs_opposites: "#0ea5e9", // sky
  u1_feelings: "#f97316",       // orange

  // UNIT 2
  u2_materials: "#64748b",      // slate
  u2_art: "#ec4899",            // pink

  // UNIT 3
  u3_outdoor_activities: "#3b82f6", // blue
  u3_outdoor_events: "#8b5cf6",     // purple

  // UNIT 4
  u4_personality: "#f59e0b",    // amber

  // UNIT 5
  u5_senses: "#06b6d4",         // cyan

  // UNIT 6
  u6_body_fitness: "#ef4444",   // red

  // UNIT 7
  u7_learning: "#22c55e",       // green

  // UNIT 8
  u8_jobs: "#a855f7"            // violet
};

export function getAccentColor(setId = "") {
  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

/* ===============================
   0) SET CATEGORY FALLBACKS
   (used when word is unknown)
=================================*/
const SET_FALLBACK = {
  // UNIT 1
  u1_verbs_opposites: "arrow-left-right",
  u1_feelings: "smile",

  // UNIT 2
  u2_materials: "layers",
  u2_art: "palette",

  // UNIT 3
  u3_outdoor_activities: "person-standing",
  u3_outdoor_events: "ticket",

  // UNIT 4
  u4_personality: "users",

  // UNIT 5
  u5_senses: "eye",

  // UNIT 6
  u6_body_fitness: "heart",

  // UNIT 7
  u7_learning: "graduation-cap",

  // UNIT 8
  u8_jobs: "briefcase"
};

/* ===============================
   1) EXACT: precise per-word icons
   Add/adjust these as needed.
=================================*/
const EXACT = {
  // ---- Unit 1 verbs ----
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

  // ---- Feelings (adjectives) ----
  happy: "smile",
  unhappy: "frown",
  scared: "alert-triangle",
  surprised: "zap",
  tired: "battery-low",
  bored: "minus-circle",
  excited: "star",
  worried: "badge-alert",
  relaxed: "coffee",

  // ---- Unit 2 materials (nouns) ----
  cardboard: "package",
  cotton: "shirt",
  glass: "glass-water",
  leather: "briefcase",
  metal: "anvil",
  paper: "file-text",
  plastic: "shopping-bag",
  wood: "tree-pine",
  wool: "scarf",

  // ---- Unit 2 art ----
  dance: "music",
  design: "pencil-ruler",
  music: "music",
  paint: "paintbrush",
  photograph: "camera",
  sculpture: "cube",
  designer: "pencil-ruler",
  musician: "music",
  painter: "paintbrush",
  photographer: "camera",

  // ---- Unit 3 activities ----
  cycling: "bike",
  jogging: "person-running",
  rowing: "waves",
  "working out": "dumbbell",
  "kite flying": "wind",
  "free running": "person-running",

  // ---- Unit 3 outdoor events (precise) ----
  // Note: if party-popper/store don't exist in your Lucide build, switch to sparkles/shopping-bag.
  festival: "party-popper",
  market: "store",
  "sports event": "trophy",
  concert: "music",

  // ---- Unit 4 personality adjectives ----
  patient: "hourglass",
  lazy: "bed",
  generous: "hand-heart",
  polite: "hand",
  confident: "badge-check",
  kind: "heart",
  mean: "thumbs-down",
  rude: "message-square-x",

  // ---- Unit 5 senses ----
  sight: "eye",
  hearing: "ear",
  smell: "wind", // lucide doesn't reliably have "nose" everywhere
  taste: "utensils",
  touch: "hand",

  // ---- Unit 6 body/fitness ----
  brain: "brain",
  heart: "heart",
  lungs: "wind", // lucide has no lungs icon; use wind/air
  muscles: "dumbbell",
  bones: "bone",
  injury: "bandage",
  stretch: "move",
  train: "dumbbell",

  // ---- Unit 7 learning pairs (verbs) ----
  achieve: "trophy",
  decide: "check-circle",
  learn: "book-open",
  solve: "puzzle",

  // ---- Unit 8 jobs ----
  astronaut: "rocket",
  builder: "hammer",
  dentist: "stethoscope",
  engineer: "wrench",
  teacher: "graduation-cap",
  lawyer: "scale",
  manager: "briefcase",

  // ---- Generic ----
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
   2) SAFE PHRASE/SYNONYM MATCHING
   Avoid short keys to reduce wrong matches.
=================================*/
const CONTAINS_RULES = [
  // phrase-first
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" },
  { keys: ["free running"], icon: "person-running" },
  { keys: ["kite flying"], icon: "wind" },

  // longer safe stems
  { keys: ["photographer", "photograph"], icon: "camera" },
  { keys: ["painter", "painting"], icon: "paintbrush" },
  { keys: ["sculpture", "sculptor"], icon: "cube" },

  // senses (safe)
  { keys: ["hearing"], icon: "ear" },
  { keys: ["sight"], icon: "eye" }
];

/* ===============================
   3) HELPERS
=================================*/
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
  // POS-aware “not perfect but consistent” fallback
  if (pos === "adj") return "smile";
  if (pos === "v") return "move";
  if (pos === "n") return "box";
  return "circle";
}

/* ===============================
   4) MAIN EXPORT
=================================*/
export function getIconName(word, pos = "", setId = "") {
  const cleaned = cleanWord(word);
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  // 1) exact match = most precise
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // 2) safe contains rules
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // 3) set/category fallback (ensures relevance even when unknown)
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

  // 4) final POS-aware fallback
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
