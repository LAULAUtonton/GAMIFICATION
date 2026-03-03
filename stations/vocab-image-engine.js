// vocab-image-engine.js
// OpenMoji COLOR semantic image engine

const OPENMOJI_BASE = "https://openmoji.org/data/color/svg/";

/*
  Map important keywords → OpenMoji icon codes
  (You can expand this safely anytime)
*/
const WORD_OVERRIDES = {
  dentist: "1F9B7.svg",        // tooth
  hairdresser: "2702.svg",     // scissors
  sun: "2600.svg",
  heart: "2764.svg",
  laptop: "1F4BB.svg",
  calendar: "1F4C5.svg",
  tree: "1F333.svg",
  game: "1F3AE.svg",
  fitness: "1F3CB.svg",
  school: "1F3EB.svg",
  music: "1F3B5.svg",
  sport: "26BD.svg",
  police: "1F46E.svg",
  cook: "1F373.svg",
  astronaut: "1F680.svg",
  book: "1F4D6.svg",
  brain: "1F9E0.svg",
  hospital: "1F3E5.svg",
  car: "1F697.svg",
  bike: "1F6B2.svg",
  phone: "1F4F1.svg",
  computer: "1F4BB.svg",
  teacher: "1F468-200D-1F3EB.svg"
};

function cleanWord(word) {
  return String(word)
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, "")
    .trim();
}

function findOverride(word) {
  const cleaned = cleanWord(word);

  for (const key in WORD_OVERRIDES) {
    if (cleaned.includes(key)) {
      return OPENMOJI_BASE + WORD_OVERRIDES[key];
    }
  }
  return null;
}

export function getImageForWord(word, setId) {

  // 1️⃣ Direct match
  const specific = findOverride(word);
  if (specific) return specific;

  // 2️⃣ Category fallback (based on vocabulary set)
  const categoryFallback = {
    u2_materials: "1F4E6.svg",        // package
    u4_phrasal_verbs: "1F9E9.svg",    // puzzle piece
    u7_learning_noun_pairs: "1F393.svg", // graduation cap
    u6_exercise_body: "1F4AA.svg",    // muscle
    u5_games_extra: "1F3AE.svg",      // gamepad
    u3_outdoor_events: "1F3A4.svg"    // microphone
  };

  if (categoryFallback[setId]) {
    return OPENMOJI_BASE + categoryFallback[setId];
  }

  // 3️⃣ Safe default fallback
  return OPENMOJI_BASE + "1F4C6.svg"; // calendar
}
