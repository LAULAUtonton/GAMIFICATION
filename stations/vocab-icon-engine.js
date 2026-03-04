// vocab-icon-engine.js
// Lucide-based semantic icon engine (bulk mapping + safer fallbacks)
//
// Goal:
// - Always return a valid Lucide icon name string
// - Prefer exact word matches, then substring/synonym matches, then category fallbacks
//
// Used by: stations/vocabulary.js -> getIconName(word)

const EXACT = {
  /* =========================
     UNIT 1 �� Verbs/opposites
  ========================= */
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

  /* =========================
     UNIT 1 — Feelings
  ========================= */
  happy: "smile",
  unhappy: "frown",
  scared: "alert-triangle",
  surprised: "zap",
  tired: "battery-low",
  bored: "minus-circle",
  excited: "star",
  worried: "alert-circle",
  relaxed: "coffee",

  /* =========================
     UNIT 2 — Materials
  ========================= */
  cardboard: "package",
  cotton: "shirt",
  glass: "glass-water",
  leather: "briefcase",
  metal: "anvil",
  paper: "file-text",
  plastic: "shopping-bag",
  wood: "tree-pine",
  wool: "scarf",

  /* =========================
     UNIT 2 — Art and artists
  ========================= */
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

  /* =========================
     UNIT 3 — Outdoor activities
  ========================= */
  cycling: "bike",
  jogging: "person-running",
  rowing: "waves",
  "working out": "dumbbell",
  "kite flying": "wind",
  "free running": "person-running",

  /* =========================
     UNIT 4 — Personality adjectives
  ========================= */
  patient: "hourglass",
  lazy: "bed",
  generous: "hand-heart",
  polite: "hand",
  confident: "badge-check",
  kind: "heart",
  mean: "thumbs-down",
  rude: "message-square-x",

  /* =========================
     UNIT 5 — Senses
  ========================= */
  sight: "eye",
  smell: "wind",
  taste: "utensils",
  touch: "hand",
  hearing: "ear",

  /* =========================
     UNIT 6 — Body and fitness
  ========================= */
  brain: "brain",
  heart: "heart",
  lungs: "wind",
  muscles: "dumbbell",
  bones: "bone",
  injury: "bandage",
  stretch: "move",
  train: "dumbbell",

  /* =========================
     UNIT 7 — Learning
  ========================= */
  achieve: "trophy",
  achievement: "award",
  decide: "check-circle",
  decision: "check-circle",
  learn: "book-open",
  learning: "book-open",
  solve: "puzzle",
  solution: "lightbulb",

  /* =========================
     UNIT 8 — Jobs
  ========================= */
  astronaut: "rocket",
  builder: "hammer",
  dentist: "stethoscope",
  engineer: "wrench",
  musician: "music",
  teacher: "graduation-cap",
  lawyer: "scale",
  manager: "briefcase",

  /* =========================
     GENERAL (shared)
  ========================= */
  book: "book",
  school: "school",
  computer: "monitor",
  laptop: "laptop",
  phone: "smartphone",
  bike: "bike",
  car: "car",
  tree: "tree-pine",
  sun: "sun",
  game: "gamepad-2",
  sport: "trophy",
  hospital: "hospital"
};

/**
 * CONTAINS rules
 * - catches variants, plurals, longer phrases
 * - evaluated in order (first match wins)
 */
const CONTAINS_RULES = [
  // jobs
  { keys: ["teacher"], icon: "graduation-cap" },
  { keys: ["engineer"], icon: "wrench" },
  { keys: ["lawyer"], icon: "scale" },
  { keys: ["manager"], icon: "briefcase" },
  { keys: ["dentist"], icon: "stethoscope" },

  // arts
  { keys: ["photo", "camera", "photograph"], icon: "camera" },
  { keys: ["paint", "painter"], icon: "paintbrush" },
  { keys: ["design"], icon: "pencil-ruler" },
  { keys: ["sculpt"], icon: "cube" },
  { keys: ["music", "musician"], icon: "music" },
  { keys: ["dance"], icon: "music" },

  // activities
  { keys: ["run", "running", "jog"], icon: "person-running" },
  { keys: ["cycle", "bike"], icon: "bike" },
  { keys: ["row"], icon: "waves" },
  { keys: ["work out", "workout", "train"], icon: "dumbbell" },
  { keys: ["kite"], icon: "wind" },

  // materials
  { keys: ["cardboard", "box", "package"], icon: "package" },
  { keys: ["cotton", "wool"], icon: "shirt" },
  { keys: ["glass"], icon: "glass-water" },
  { keys: ["metal"], icon: "anvil" },
  { keys: ["paper"], icon: "file-text" },
  { keys: ["plastic"], icon: "shopping-bag" },
  { keys: ["wood"], icon: "tree-pine" },
  { keys: ["leather"], icon: "briefcase" },

  // senses/body
  { keys: ["see", "sight", "look"], icon: "eye" },
  { keys: ["hear", "hearing", "listen"], icon: "ear" },
  { keys: ["touch"], icon: "hand" },
  { keys: ["taste"], icon: "utensils" },
  { keys: ["smell"], icon: "wind" },
  { keys: ["heart"], icon: "heart" },
  { keys: ["brain"], icon: "brain" }
];

/**
 * CATEGORY fallbacks
 * If a word is unknown, at least try a broad semantic bucket.
 */
const CATEGORY_RULES = [
  { keys: ["happy", "sad", "tired", "bored", "worried", "scared", "excited"], icon: "smile" },
  { keys: ["money", "buy", "sell", "spend", "save", "borrow", "lend"], icon: "credit-card" },
  { keys: ["school", "learn", "study", "book"], icon: "book-open" },
  { keys: ["sport", "exercise", "train", "fitness"], icon: "dumbbell" },
  { keys: ["art", "paint", "design", "music", "photo"], icon: "palette" },
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

export function getIconName(word) {
  const cleaned = cleanWord(word);

  if (!cleaned) return "circle";

  // 1) exact
  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  // 2) substring/synonym
  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  // 3) category fallback
  const catIcon = matchRules(cleaned, CATEGORY_RULES);
  if (catIcon) return catIcon;

  // 4) safe fallback
  return "circle";
}
