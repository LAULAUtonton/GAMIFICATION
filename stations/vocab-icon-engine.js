// stations/vocab-icon-engine.js

console.log("Vocabulary Icon Engine loaded (SVG + Lucide hybrid, with aliases)");

/* ------------------------------------------------
UTILITY
------------------------------------------------ */

function cleanWord(word) {
  return String(word ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, "")
    .trim();
}

/* ------------------------------------------------
ALIAS MAPS (VOCAB WORD -> SVG FILENAME)
These fix mismatches between your vocabulary words
and the actual filenames in the icon packs.
------------------------------------------------ */

// Your emotion pack uses filenames like anxious.svg, calm.svg, astonished.svg...
const EMOTION_ALIASES = {
  happy: "happy",                 // you said this one works already
  unhappy: "crying",              // closest in your list
  scared: "anxious",              // closest
  worried: "anxious",             // closest
  surprised: "astonished",        // exact meaning
  excited: "excited",             // exact
  relaxed: "calm",                // exact meaning
  tired: "sleepy",                // IF you have sleepy.svg; if not, see note below
  bored: "annoyed"                // closest in your list (or "confused" if better)
};

// Jobs pack: you must match vocabulary words to existing filenames.
// (You can edit these once you confirm the exact file list inside stations/icons/jobs)
const JOB_ALIASES = {
  teacher: "teacher",
  lawyer: "lawyer",
  astronaut: "astronauts",        // your pack said "astronauts.svg"
  musician: "singer",             // or "disc jockey" if you rename (see note)
  engineer: "programmer",         // closest technical profession in your pack
  manager: "banker",              // closest office/business icon
  builder: "lumberjack",          // OR "wall painter" if you prefer (spaces issue)
  dentist: "doctor"               // closest medical icon
};

/* ------------------------------------------------
COLOR SYSTEM
------------------------------------------------ */

export function getAccentColor(word = "", setId = "") {
  const w = cleanWord(word);
  const sid = String(setId || "").toLowerCase();

  // emotion color
  if (EMOTION_ALIASES[w]) return "#f59e0b";

  // job color
  if (JOB_ALIASES[w]) return "#6366f1";

  if (sid.includes("verbs")) return "#0ea5e9";
  if (sid.includes("materials")) return "#64748b";
  if (sid.includes("fitness")) return "#ef4444";
  if (sid.includes("learning")) return "#22c55e";

  return "#2563eb";
}

/* ------------------------------------------------
ICON ENGINE
------------------------------------------------ */

export function getIconName(word, pos = "", setId = "") {
  const cleaned = cleanWord(word);

  // --- EMOTIONS (SVG) ---
  if (EMOTION_ALIASES[cleaned]) {
    return `./icons/emotions/${EMOTION_ALIASES[cleaned]}.svg`;
  }

  // --- JOBS (SVG) ---
  if (JOB_ALIASES[cleaned]) {
    // IMPORTANT: if your jobs filenames include spaces (e.g. "customer service.svg"),
    // this still works, but it’s safer to rename files to remove spaces.
    return `./icons/jobs/${JOB_ALIASES[cleaned]}.svg`;
  }

  // --- VERBS (Lucide) ---
  const VERB_ICONS = {
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

  if (VERB_ICONS[cleaned]) return VERB_ICONS[cleaned];

  // --- SIMPLE FALLBACKS (Lucide) ---
  if (cleaned.includes("jog")) return "person-running";
  if (cleaned.includes("row")) return "ship";
  if (cleaned.includes("kite")) return "wind";
  if (cleaned.includes("festival")) return "party-popper";
  if (cleaned.includes("concert")) return "music";
  if (cleaned.includes("market")) return "shopping-bag";

  if (cleaned === "wood") return "tree-pine";
  if (cleaned === "glass") return "wine";
  if (cleaned === "metal") return "cpu";
  if (cleaned === "plastic") return "package";
  if (cleaned === "paper") return "file-text";
  if (cleaned === "cotton") return "flower";
  if (cleaned === "leather") return "briefcase";
  if (cleaned === "wool") return "circle";

  if (cleaned === "sight") return "eye";
  if (cleaned === "hearing") return "ear";
  if (cleaned === "smell") return "wind";
  if (cleaned === "taste") return "coffee";
  if (cleaned === "touch") return "hand";

  if (cleaned === "heart") return "heart";
  if (cleaned === "brain") return "brain";
  if (cleaned === "lungs") return "activity";
  if (cleaned === "muscles") return "dumbbell";
  if (cleaned === "stretch") return "move";
  if (cleaned === "train") return "dumbbell";
  if (cleaned === "injury") return "bandage";

  return "circle";
}
