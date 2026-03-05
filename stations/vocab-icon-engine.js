// vocab-icon-engine.js

const ICON_PATHS = {
  jobs: "icons/jobs/",
  materials: "icons/materials/",
  personality: "icons/personality/",
  emotions: "icons/emotions/",
  activities: "icons/activities/"
};


// limpia nombres para que coincidan con svg
function normalize(name){

  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g,"-")
    .replace(/[^\w-]/g,"");

}


// devuelve la ruta del icono
export function getIconPath(category,name){

  const folder = ICON_PATHS[category];

  if(!folder){
    console.warn("Unknown category:",category);
    return "icons/missing.svg";
  }

  const file = normalize(name) + ".svg";

  return folder + file;

}
