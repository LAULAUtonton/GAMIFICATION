// vocab-icon-engine.js
// Lucide-based semantic icon engine for vocabulary.js
// Exports getIconName(word) — returns a Lucide icon name string

const ICONS = {

  /* VERBS — Unit 1 opposites */
  agree:        "thumbs-up",
  disagree:     "thumbs-down",
  appear:       "sparkles",
  disappear:    "wind",
  borrow:       "handshake",
  lend:         "hand",
  buy:          "shopping-bag",
  sell:         "tag",
  connect:      "link",
  disconnect:   "unlink",
  lose:         "trending-down",
  win:          "trophy",
  save:         "piggy-bank",
  spend:        "credit-card",
  send:         "send",
  receive:      "inbox",

  /* FEELINGS — Unit 1 */
  happy:        "smile",
  unhappy:      "frown",
  scared:       "alert-triangle",
  surprised:    "zap",
  tired:        "battery-low",
  bored:        "minus-circle",
  excited:      "star",
  worried:      "alert-circle",
  relaxed:      "coffee",

  /* MATERIALS — Unit 2 */
  cardboard:    "package",
  cotton:       "shirt",
  glass:        "wine-glass",
  leather:      "briefcase",
  metal:        "settings",
  paper:        "file-text",
  plastic:      "recycle",
  wood:         "trees",
  wool:         "layers",

  /* ART — Unit 2 */
  dance:        "music",
  design:       "pen-tool",
  music:        "music",
  paint:        "palette",
  photograph:   "camera",
  sculpture:    "box",
  designer:     "pen-tool",
  musician:     "music",
  painter:      "paintbrush-2",
  photographer: "camera",

  /* OUTDOOR — Unit 3 */
  cycling:      "bike",
  jogging:      "footprints",
  rowing:       "sailboat",
  kayaking:     "sailboat",
  training:     "dumbbell",

  /* PERSONALITY — Unit 4 */
  patient:      "timer",
  generous:     "heart-handshake",
  mean:         "frown",
  polite:       "hand",
  rude:         "ban",
  confident:    "badge-check",
  shy:          "eye-off",
  kind:         "heart",
  unkind:       "heart-crack",

  /* SENSES — Unit 5 */
  sight:        "eye",
  hearing:      "ear",
  smell:        "wind",
  taste:        "utensils",
  touch:        "hand",

  /* BODY / HEALTH — Unit 6 */
  muscles:      "dumbbell",
  bones:        "bone",
  brain:        "brain",
  heart:        "heart",
  lungs:        "wind",
  injury:       "band-aid",
  stretch:      "expand",
  train:        "dumbbell",
  rest:         "moon",
  energy:       "zap",

  /* LEARNING — Unit 7 */
  achieve:      "medal",
  achievement:  "trophy",
  decide:       "git-branch",
  decision:     "check-circle",
  solve:        "puzzle",
  solution:     "lightbulb",
  learn:        "book-open",
  learning:     "graduation-cap",
  respect:      "shield",

  /* JOBS — Unit 8 */
  dentist:      "cross",
  hairdresser:  "scissors",
  engineer:     "wrench",
  police:       "shield",
  lawyer:       "scale",
  cook:         "chef-hat",
  astronaut:    "rocket",
  builder:      "hammer",
  manager:      "briefcase",
  detective:    "search",
  teacher:      "graduation-cap",

  /* GENERAL FALLBACKS */
  book:         "book",
  school:       "school",
  computer:     "monitor",
  laptop:       "laptop",
  phone:        "smartphone",
  bike:         "bike",
  car:          "car",
  tree:         "tree-pine",
  sun:          "sun",
  game:         "gamepad-2",
  sport:        "trophy",
  hospital:     "hospital"
};

function cleanWord(word) {
  return String(word)
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, "")
    .trim();
}

export function getIconName(word, pos = "", setId = "") {
  const cleaned = cleanWord(word);

  if (cleaned && Object.prototype.hasOwnProperty.call(ICONS, cleaned)) {
    return ICONS[cleaned];
  }

  for (const key of Object.keys(ICONS)) {
    if (cleaned.includes(key)) {
      return ICONS[key];
    }
  }

  // POS-based fallback
  const p = String(pos).toLowerCase();
  if (p === "v") return "zap";
  if (p === "adj") return "tag";
  return "circle";
}

export function getAccentColor(word = "", setId = "") {
  const s = String(setId).toLowerCase();
  if (s.includes("feel") || s.includes("personality")) return "#f59e0b";
  if (s.includes("jobs") || s.includes("job"))          return "#6366f1";
  if (s.includes("body") || s.includes("health"))       return "#ef4444";
  if (s.includes("art")  || s.includes("music"))        return "#ec4899";
  if (s.includes("outdoor") || s.includes("activities"))return "#10b981";
  if (s.includes("learn") || s.includes("school"))      return "#3b82f6";
  return "#8b5cf6";
}