// vocab-image-engine.js

import { getIconPath, getIconName } from "./vocab-icon-engine.js";

export function createIcon(category, word) {

  const iconName = getIconName(word);
  const path = getIconPath(category, word);

  const container = document.createElement("div");
  container.className = "vocab-icon";

  const img = document.createElement("img");

  img.src = path;
  img.alt = word;

  img.onerror = () => {

    // fallback → lucide
    const lucideIcon = document.createElement("i");
    lucideIcon.setAttribute("data-lucide", iconName);

    container.innerHTML = "";
    container.appendChild(lucideIcon);

    if (window.lucide) {
      lucide.createIcons();
    }

  };

  container.appendChild(img);

  return container;
}
