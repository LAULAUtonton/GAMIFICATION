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


// normalizar nombres
function normalize(word){
  return word
    .toLowerCase()
    .trim()
    .replace(/\s+/g,"-")
    .replace(/[^\w-]/g,"");
}


// devuelve nombre de icono
export function getIconName(word){
  return normalize(word);
}


// devuelve ruta completa
export function getIconPath(category,word){

  const folder = ICON_PATHS[category];

  if(!folder){
    console.warn("Unknown category:",category);
    return "icons/missing.svg";
  }

  return folder + normalize(word) + ".svg";
}


// ESTA FUNCION FALTABA
export function getAccentColor(category){

  if(CATEGORY_COLORS[category]){
    return CATEGORY_COLORS[category];
  }

  return "#999";

}
