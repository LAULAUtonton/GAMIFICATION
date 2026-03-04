import { VOCAB_DB, getCards, shuffle, listUnits } from "./vocabulary.js";
import { getAccentColor } from "./vocab-icon-engine.js";

const grid = document.getElementById("grid");
const unitSelect = document.getElementById("unitSelect");
const shuffleBtn = document.getElementById("shuffleBtn");

let cards = [];

function initUnits(){
  const units = listUnits(VOCAB_DB);
  unitSelect.innerHTML =
    `<option value="all">All Units</option>` +
    units.map(u => `<option value="${u.unit}">Unit ${u.unit}</option>`).join("");
}

function applyIconColors(){
  document.querySelectorAll(".icon svg").forEach(svg => {
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("fill", "none");
  });
}

function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function render(){
  grid.innerHTML = cards.map(card => `
    <div class="card">
      <div class="icon" style="color:${getAccentColor(card.front, card.setId)}">
        <i data-lucide="${escapeHtml(card.icon)}"></i>
      </div>

      <div class="word">
        <span class="front">${escapeHtml(card.front)}</span>
        ${card.pos ? `<span class="pos">(${escapeHtml(card.pos)})</span>` : ``}
        ${card.setLabel ? `<span class="cat">${escapeHtml(card.setLabel)}</span>` : ``}
      </div>

      ${card.back ? `<div class="back">${escapeHtml(card.back)}</div>` : ``}
      <div class="meta">Unit ${escapeHtml(card.unit)} · ${escapeHtml(card.setLabel)}</div>
    </div>
  `).join("");

  // lucide is global from the CDN script tag
  lucide.createIcons();
  applyIconColors();
}

function load(){
  const unitVal = unitSelect.value;
  cards = (unitVal === "all")
    ? getCards(VOCAB_DB)
    : getCards(VOCAB_DB, { unit: Number(unitVal) });

  render();
}

unitSelect.addEventListener("change", load);
shuffleBtn.addEventListener("click", ()=>{
  cards = shuffle(cards);
  render();
});

initUnits();
load();

console.log("[vocabulary-page] loaded OK");
