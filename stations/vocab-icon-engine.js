// vocab-icon-engine.js
// High-precision icon + color engine for Vocabulary Station (Lucide)
//
// Exports:
// - getIconName(word, pos, setId)
// - getAccentColor(word, setId)

const DEBUG_MISSING = false;

/* ===============================
   CATEGORY COLORS (set-level)
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
   FEELINGS (emotion precision pack)
   Icons chosen to represent the emotion consistently.
=================================*/
const FEELINGS_ICON = {
  happy: "smile",
  unhappy: "frown",
  sad: "frown",
  scared: "shield-alert",     // fear / danger
  afraid: "shield-alert",
  worried: "badge-alert",     // anxiety
  nervous: "badge-alert",
  surprised: "sparkles",      // surprise / wow
  shocked: "sparkles",
  excited: "party-popper",    // celebration / excitement
  bored: "circle-minus",      // low energy / dull
  tired: "battery-low",
  relaxed: "coffee",
  angry: "flame",             // anger
  calm: "coffee"
};

// Emotion colors (word-level)
const FEELINGS_COLOR = {
  happy: "#22c55e",      // green
  unhappy: "#64748b",    // slate
  sad: "#60a5fa",        // soft blue
  scared: "#ef4444",     // red
  afraid: "#ef4444",
  worried: "#f97316",    // orange
  nervous: "#f97316",
  surprised: "#a855f7",  // purple
  shocked: "#a855f7",
  excited: "#f59e0b",    // amber/yellow
  bored: "#94a3b8",      // gray
  tired: "#0ea5e9",      // sky/blue
  relaxed: "#10b981",    // teal/green
  angry: "#dc2626",      // deep red
  calm: "#10b981"
};

/* ===============================
   OTHER WORD COLORS (optional)
=================================*/
const WORD_ACCENT = {
  // Outdoor events (example)
  festival: "#ec4899",
  market: "#22c55e",
  "sports event": "#3b82f6",
  concert: "#a855f7",

  // Senses
  sight: "#3b82f6",
  hearing: "#8b5cf6",
  smell: "#06b6d4",
  taste: "#f97316",
  touch: "#10b981"
};

export function getAccentColor(word = "", setId = "") {
  const cleaned = cleanWord(word);

  // 1) feelings word-level color
  if (cleaned && Object.prototype.hasOwnProperty.call(FEELINGS_COLOR, cleaned)) {
    return FEELINGS_COLOR[cleaned];
  }

  // 2) other word-level color
  if (cleaned && Object.prototype.hasOwnProperty.call(WORD_ACCENT, cleaned)) {
    return WORD_ACCENT[cleaned];
  }

  // 3) set/category color
  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

/* ===============================
   SET CATEGORY FALLBACK ICONS
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
   EXACT ICONS (precision)
   Feelings uses FEELINGS_ICON first.
=================================*/
const EXACT = {
  // Unit 1 verbs
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

  // Unit 2 materials
  cardboard: "package",
  cotton: "shirt",
  glass: "glass-water",
  leather: "briefcase",
  metal: "anvil",
  paper: "file-text",
  plastic: "shopping-bag",
  wood: "tree-pine",
  wool: "scarf",

  // Unit 2 art
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

  // Unit 3 activities
  cycling: "bike",
  jogging: "person-running",
  rowing: "waves",
  "working out": "dumbbell",
  "kite flying": "wind",
  "free running": "person-running",

  // Unit 3 outdoor events
  festival: "party-popper",
  market: "store",
  "sports event": "trophy",
  concert: "music",

  // Unit 4 personality
  patient: "hourglass",
  lazy: "bed",
  generous: "hand-heart",
  polite: "hand",
  confident: "badge-check",
  kind: "heart",
  mean: "thumbs-down",
  rude: "message-square-x",

  // Unit 5 senses
  sight: "eye",
  hearing: "ear",
  smell: "wind",
  taste: "utensils",
  touch: "hand",

  // Unit 6 body
  brain: "brain",
  heart: "heart",
  lungs: "wind",
  muscles: "dumbbell",
  bones: "bone",
  injury: "bandage",
  stretch: "move",
  train: "dumbbell",

  // Unit 7 learning
  achieve: "trophy",
  decide: "check-circle",
  learn: "book-open",
  solve: "puzzle",

  // Unit 8 jobs
  astronaut: "rocket",
  builder: "hammer",
  dentist: "stethoscope",
  engineer: "wrench",
  teacher: "graduation-cap",
  lawyer: "scale",
  manager: "briefcase"
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

/* ===============================
   MAIN
=================================*/
export function getIconName(word, pos = "", setId = "") {
  const cleaned = cleanWord(word);
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  // 0) Feelings pack first (most important for you)
  if (Object.prototype.hasOwnProperty.call(FEELINGS_ICON, cleaned)) {
    return FEELINGS_ICON[cleaned];
  }

  // 1) Exact map
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // 2) Contains rules
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // 3) Set fallback
  if (sid && Object.prototype.hasOwnProperty.call(SET_FALLBACK, sid)) {
    const fallbackIcon = SET_FALLBACK[sid];
    if (DEBUG_MISSING) {
      console.warn("[vocab-icon-engine] Using SET fallback:", { word, cleaned, pos: p, setId: sid, icon: fallbackIcon });
    }
    return fallbackIcon;
  }

  // 4) POS fallback
  const fallback = posFallback(p);
  if (DEBUG_MISSING) {
    console.warn("[vocab-icon-engine] Missing icon (POS fallback):", { word, cleaned, pos: p, setId: sid, icon: fallback });
    }
  return fallback;
}
