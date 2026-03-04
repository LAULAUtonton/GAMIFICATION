// stations/vocab-icon-engine.js

console.log("Vocabulary Icon Engine loaded (SVG + Lucide hybrid)");

/* ------------------------------------------------
ICON BANKS
------------------------------------------------ */

const EMOTIONS = [
  "happy",
  "unhappy",
  "scared",
  "surprised",
  "tired",
  "bored",
  "excited",
  "worried",
  "relaxed",
  "patient",
  "lazy",
  "generous",
  "polite",
  "kind",
  "mean",
  "rude"
];

const JOBS = [
  "teacher",
  "librarian",
  "architect",
  "artist",
  "banker",
  "nurse",
  "doctor",
  "singer",
  "mechanic",
  "programmer",
  "storekeeper",
  "astronaut",
  "pilot",
  "postman",
  "detective",
  "chef",
  "farmer",
  "electrician",
  "gardener",
  "driver",
  "vet",
  "lawyer"
];


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
COLOR SYSTEM
------------------------------------------------ */

export function getAccentColor(word = "", setId = "") {

  const w = cleanWord(word);

  if (EMOTIONS.includes(w)) return "#f59e0b";
  if (JOBS.includes(w)) return "#6366f1";

  const sid = String(setId || "");

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

  /* --------------------------------------------
  EMOTION ICONS
  -------------------------------------------- */

  if (EMOTIONS.includes(cleaned)) {
    return `icons/emotions/${cleaned}.svg`;
  }


  /* --------------------------------------------
  JOB ICONS
  -------------------------------------------- */

  if (JOBS.includes(cleaned)) {
    return `icons/jobs/${cleaned}.svg`;
  }


  /* --------------------------------------------
  VERB ICONS
  -------------------------------------------- */

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

  if (VERB_ICONS[cleaned]) {
    return VERB_ICONS[cleaned];
  }


  /* --------------------------------------------
  OUTDOOR ACTIVITIES
  -------------------------------------------- */

  if (cleaned.includes("jog")) return "person-running";
  if (cleaned.includes("row")) return "ship";
  if (cleaned.includes("kite")) return "wind";
  if (cleaned.includes("run")) return "zap";


  /* --------------------------------------------
  EVENTS
  -------------------------------------------- */

  if (cleaned.includes("festival")) return "party-popper";
  if (cleaned.includes("concert")) return "music";
  if (cleaned.includes("market")) return "shopping-bag";


  /* --------------------------------------------
  MATERIALS
  -------------------------------------------- */

  if (cleaned === "wood") return "tree-pine";
  if (cleaned === "glass") return "wine";
  if (cleaned === "metal") return "cpu";
  if (cleaned === "plastic") return "package";
  if (cleaned === "paper") return "file-text";
  if (cleaned === "cotton") return "flower";
  if (cleaned === "leather") return "briefcase";
  if (cleaned === "wool") return "circle";


  /* --------------------------------------------
  SENSES
  -------------------------------------------- */

  if (cleaned === "sight") return "eye";
  if (cleaned === "hearing") return "ear";
  if (cleaned === "smell") return "wind";
  if (cleaned === "taste") return "coffee";
  if (cleaned === "touch") return "hand";


  /* --------------------------------------------
  BODY / FITNESS
  -------------------------------------------- */

  if (cleaned === "heart") return "heart";
  if (cleaned === "brain") return "brain";
  if (cleaned === "lungs") return "activity";
  if (cleaned === "muscles") return "dumbbell";
  if (cleaned === "stretch") return "move";
  if (cleaned === "train") return "dumbbell";
  if (cleaned === "injury") return "bandage";


  /* --------------------------------------------
  DEFAULT
  -------------------------------------------- */

  return "circle";
}
