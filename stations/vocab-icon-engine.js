// vocab-icon-engine.js

const ICON_PATHS = {
  jobs: "icons/jobs/",
  materials: "icons/materials/",
  personality: "icons/personality/",
  emotions: "icons/emotions/",
  activities: "icons/activities/"
};


// limpia el nombre del vocabulario
function normalize(word) {
  return word
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}


// devuelve solo el nombre del icono
export function getIconName(word) {
  return normalize(word);
}


// devuelve la ruta completa del icono
export function getIconPath(category, word) {

  const folder = ICON_PATHS[category];

  if (!folder) {
    console.warn("Unknown category:", category);
    return "icons/missing.svg";
  }

  return folder + normalize(word) + ".svg";

}
