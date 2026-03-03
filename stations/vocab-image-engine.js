// vocab-icon-engine.js
// Lucide-based semantic icon engine

const ICONS = {

  /* VERBS */
  agree: "handshake",
  disagree: "x-circle",
  appear: "sparkles",
  disappear: "wind",
  borrow: "banknote",
  lend: "banknote",
  buy: "shopping-bag",
  sell: "banknote",
  connect: "link",
  disconnect: "unlink",
  lose: "x",
  win: "trophy",
  save: "save",
  spend: "credit-card",
  send: "send",
  receive: "inbox",

  /* FEELINGS */
  happy: "smile",
  unhappy: "frown",
  scared: "alert-triangle",
  surprised: "zap",
  tired: "battery-low",
  bored: "minus-circle",
  excited: "star",
  worried: "alert-circle",
  relaxed: "coffee",

  /* JOBS */
  dentist: "activity",
  hairdresser: "scissors",
  engineer: "wrench",
  musician: "music",
  police: "shield",
  lawyer: "scale",
  cook: "chef-hat",
  astronaut: "rocket",
  builder: "hammer",
  manager: "briefcase",
  detective: "search",
  teacher: "graduation-cap",

  /* GENERAL */
  book: "book",
  school: "school",
  computer: "monitor",
  laptop: "laptop",
  phone: "smartphone",
  bike: "bike",
  car: "car",
  tree: "tree-pine",
  sun: "sun",
  heart: "heart",
  game: "gamepad-2",
  sport: "trophy",
  music: "music",
  hospital: "hospital",
  brain: "brain"
};

function cleanWord(word) {
  return String(word)
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, "")
    .trim();
}

export function getIconName(word) {
  const cleaned = cleanWord(word);

  if (ICONS[cleaned]) return ICONS[cleaned];

  for (const key in ICONS) {
    if (cleaned.includes(key)) {
      return ICONS[key];
    }
  }

  return "circle"; // safe fallback
}
