// vocab-icon-engine.js

const ICON_PATHS = {
  jobs: "icons/jobs/",
  materials: "icons/materials/",
  personality: "icons/personality/",
  emotions: "icons/emotions/",
  activities: "icons/activities/"
};

const CATEGORY_COLORS = {
  jobs: "#4CAF50",
  materials: "#8D6E63",
  personality: "#FF9800",
  emotions: "#E91E63",
  activities: "#2196F3"
};


// limpiar nombre
function normalize(word) {
  return word
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}


// nombre del icono
export function getIconName(word) {
  return normalize(word);
}


// ruta SVG
export function getIconPath(category, word) {

  const folder = ICON_PATHS[category];

  if (!folder) return null;

  return folder + normalize(word) + ".svg";

}


// color categoría
export function getAccentColor(category) {
  return CATEGORY_COLORS[category] || "#999";
}
