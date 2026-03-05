// vocab-image-engine.js

import { getIconPath } from "./vocab-icon-engine.js";


/*
Create icon element
Used by vocabulary page and games
*/

export function createIcon(category, word) {

  const img = document.createElement("img");

  img.className = "vocab-icon";

  img.src = getIconPath(category, word);

  img.alt = word;

  img.loading = "lazy";

  // fallback if icon missing
  img.onerror = () => {
    img.src = "icons/missing.svg";
  };

  return img;
}



/*
Insert icon into container
*/

export function insertIcon(container, category, word) {

  const icon = createIcon(category, word);

  container.appendChild(icon);

}



/*
Replace an existing element with icon
*/

export function replaceWithIcon(element, category, word) {

  const icon = createIcon(category, word);

  element.replaceWith(icon);

}



/*
Create icon card (icon + label)
Used for vocabulary grid
*/

export function createIconCard(wordObj) {

  const card = document.createElement("div");

  card.className = "vocab-card";


  const icon = createIcon(wordObj.category, wordObj.word);


  const label = document.createElement("div");

  label.className = "vocab-label";

  label.textContent = wordObj.word;


  card.appendChild(icon);

  card.appendChild(label);

  return card;

}
