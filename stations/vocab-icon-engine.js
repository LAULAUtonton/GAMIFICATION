// vocab-icon-engine.js

// Icons are stored under: stations/icons/<category>/<word>.svg
const ICON_BASE = "stations/icons/";

const ICON_PATHS = {
  jobs: ICON_BASE + "jobs/",
  materials: ICON_BASE + "materials/",
  personality: ICON_BASE + "personality/",
  emotions: ICON_BASE + "emotions/",
  activities: ICON_BASE + "activities/"
};

const CATEGORY_COLORS = {
  jobs: "#4CAF50",
  materials: "#8D6E63",
  personality: "#FF9800",
  emotions: "#E91E63",
  activities: "#2196F3"
};

// normalize filename from word
function normalize(word) {
  return String(word ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getIconName(word) {
  return normalize(word);
}

export function getIconPath(category, word) {
  const folder = ICON_PATHS[category];
  if (!folder) return null;
  return folder + normalize(word) + ".svg";
}

export function getAccentColor(category) {
  return CATEGORY_COLORS[category] || "#999";
}
