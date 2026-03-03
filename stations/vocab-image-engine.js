// vocab-image-engine.js
// OpenMoji COLOR semantic image engine
// Version 2.0 — Expanded + Stable

const OPENMOJI_BASE = "https://openmoji.org/data/color/svg/";

/* --------------------------------------------------
   WORD → ICON MAPPING
   (expandable safely)
-------------------------------------------------- */

const WORD_OVERRIDES = {

  /* ---------- UNIT 1 VERBS ---------- */
  agree: "1F91D.svg",          // handshake
  disagree: "274C.svg",        // cross mark
  appear: "2728.svg",          // sparkle
  disappear: "1F4A8.svg",      // dash
  borrow: "1F4B0.svg",         // money bag
  lend: "1F4B5.svg",           // dollar
  buy: "1F6CD.svg",            // shopping bags
  sell: "1F4B8.svg",           // money with wings
  connect: "1F517.svg",        // link
  disconnect: "1F4F4.svg",     // phone off
  lose: "274C.svg",
  win: "1F3C6.svg",            // trophy
  save: "1F4BE.svg",           // floppy disk
  spend: "1F4B8.svg",
  send: "1F4E4.svg",           // outbox
  receive: "1F4E5.svg",        // inbox

  /* ---------- FEELINGS ---------- */
  happy: "1F600.svg",
  unhappy: "1F641.svg",
  scared: "1F628.svg",
  surprised: "1F632.svg",
  tired: "1F62A.svg",
  bored: "1F611.svg",
  excited: "1F929.svg",
  worried: "1F61F.svg",
  relaxed: "1F60C.svg",

  /* ---------- JOBS ---------- */
  dentist: "1F9B7.svg",
  hairdresser: "2702.svg",
  engineer: "1F527.svg",
  musician: "1F3B5.svg",
  police: "1F46E.svg",
  lawyer: "2696.svg",
  cook: "1F373.svg",
  astronaut: "1F680.svg",
  builder: "1F6E0.svg",
  manager: "1F4BC.svg",
  detective: "1F575.svg",
  teacher: "1F468-200D-1F3EB.svg",

  /* ---------- OBJECTS ---------- */
  book: "1F4D6.svg",
  school: "1F3EB.svg",
  computer: "1F4BB.svg",
  laptop: "1F4BB.svg",
  phone: "1F4F1.svg",
  bike: "1F6B2.svg",
  car: "1F697.svg",
  tree: "1F333.svg",
  sun: "2600.svg",
  heart: "2764.svg",
  game: "1F3AE.svg",
  sport: "26BD.svg",
  music: "1F3B5.svg",
  hospital: "1F3E5.svg",
  brain: "1F9E0.svg"
};


/* --------------------------------------------------
   CLEAN WORD
-------------------------------------------------- */

function cleanWord(word) {
  return String(word)
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, "")
    .trim();
}


/* --------------------------------------------------
   MATCH ENGINE
-------------------------------------------------- */

function findOverride(word) {
  const cleaned = cleanWord(word);

  // direct match
  if (WORD_OVERRIDES[cleaned]) {
    return OPENMOJI_BASE + WORD_OVERRIDES[cleaned];
  }

  // partial match
  for (const key in WORD_OVERRIDES) {
    if (cleaned.includes(key)) {
      return OPENMOJI_BASE + WORD_OVERRIDES[key];
    }
  }

  return null;
}


/* --------------------------------------------------
   MAIN EXPORT
-------------------------------------------------- */

export function getImageForWord(word, setId) {

  // 1️⃣ Direct semantic match
  const specific = findOverride(word);
  if (specific) return specific;

  // 2️⃣ Category fallback (by vocabulary set)
  const categoryFallback = {

    // Materials
    u2_materials: "1F4E6.svg",

    // Phrasal verbs
    u4_phrasal_verbs: "1F9E9.svg",

    // Learning nouns
    u7_learning_noun_pairs: "1F393.svg",

    // Exercise
    u6_exercise_body: "1F4AA.svg",

    // Games
    u5_games_extra: "1F3AE.svg",

    // Outdoor events
    u3_outdoor_events: "1F3A4.svg",

    // Personality adjectives
    u4_personality_adjectives: "1F464.svg"
  };

  if (categoryFallback[setId]) {
    return OPENMOJI_BASE + categoryFallback[setId];
  }

  // 3️⃣ Final safe default
  return OPENMOJI_BASE + "1F4C6.svg"; // calendar
}
