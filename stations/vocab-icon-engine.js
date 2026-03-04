// vocab-icon-engine.js (NO-IMPORT SAFE VERSION)
// Full, standalone icon+color engine (no imports).
// Exports:
// - getAccentColor(word, setId)
// - getIconName(word, pos, setId)

console.log("vocab-icon-engine loaded: 2026-03-04 safe-no-import v1");

const DEBUG_MISSING = false;

const SET_ACCENT = {
  u1_verbs_opposites: "#0ea5e9",
  u1_feelings: "#f97316",
  u2_materials: "#64748b",
  u2_art: "#ec4899",
  u3_outdoor_activities: "#3b82f6",
  u3_outdoor_events: "#8b5cf6",
  u4_personality: "#f59e0b",
  u5_senses: "#06b6d4",
  u6_body_fitness: "#ef4444",
  u7_learning: "#22c55e",
  u8_jobs: "#a855f7"
};

const SET_FALLBACK = {
  u1_verbs_opposites: "arrow-left-right",
  u1_feelings: "smile",
  u2_materials: "layers",
  u2_art: "palette",
  u3_outdoor_activities: "person-standing",
  u3_outdoor_events: "ticket",
  u4_personality: "users",
  u5_senses: "eye",
  u6_body_fitness: "heart",
  u7_learning: "graduation-cap",
  u8_jobs: "briefcase"
};

// Per-word colors (multi-color icons inside a set)
const WORD_ACCENT = {
  // Feelings
  happy: "#22c55e",
  unhappy: "#64748b",
  scared: "#ef4444",
  worried: "#f97316",
  surprised: "#a855f7",
  tired: "#0ea5e9",
  bored: "#94a3b8",
  excited: "#f59e0b",
  relaxed: "#10b981",

  // Art
  design: "#3b82f6",
  designer: "#06b6d4"
};

// Per-word icons (precision). Add more words here for higher accuracy.
const EXACT = {
  // Feelings
  happy: "smile",
  unhappy: "frown",
  scared: "alert-triangle",
  worried: "badge-alert",
  surprised: "sparkles",
  tired: "battery-low",
  bored: "circle-minus",
  excited: "star",
  relaxed: "coffee",

  // Art (different icons so “design” != “designer”)
  design: "pen-tool",
  designer: "pencil",

  // Outdoor events
  festival: "sparkles",
  market: "shopping-bag",
  "sports event": "trophy",
  concert: "music"
};

const CONTAINS_RULES = [
  { keys: ["working out", "work out", "workout"], icon: "dumbbell" },
  { keys: ["free running"], icon: "person-running" },
  { keys: ["kite flying"], icon: "wind" },
  { keys: ["photographer", "photograph"], icon: "camera" },
  { keys: ["painter", "painting"], icon: "paintbrush" },
  { keys: ["sculpture", "sculptor"], icon: "cube" }
];

function cleanWord(word) {
  return String(word ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchRules(cleaned, rules) {
  for (const rule of rules) {
    for (const k of rule.keys) {
      if (cleaned.includes(k)) return rule.icon;
    }
  }
  return null;
}

function posFallback(pos) {
  if (pos === "adj") return "smile";
  if (pos === "v") return "move";
  if (pos === "n") return "box";
  return "circle";
}

export function getAccentColor(word = "", setId = "") {
  const cleaned = cleanWord(word);
  if (cleaned && Object.prototype.hasOwnProperty.call(WORD_ACCENT, cleaned)) {
    return WORD_ACCENT[cleaned];
  }
  const sid = String(setId || "");
  return SET_ACCENT[sid] || "#2563eb";
}

export function getIconName(word, pos = "", setId = "") {
  const cleaned = cleanWord(word);
  const p = String(pos || "").toLowerCase();
  const sid = String(setId || "");

  if (!cleaned) return posFallback(p);

  if (Object.prototype.hasOwnProperty.call(EXACT, cleaned)) {
    return EXACT[cleaned];
  }

  const containsIcon = matchRules(cleaned, CONTAINS_RULES);
  if (containsIcon) return containsIcon;

  if (sid && Object.prototype.hasOwnProperty.call(SET_FALLBACK, sid)) {
    const fallbackIcon = SET_FALLBACK[sid];
    if (DEBUG_MISSING) {
      console.warn("[vocab-icon-engine] Using SET fallback:", { word, cleaned, pos: p, setId: sid, icon: fallbackIcon });
    }
    return fallbackIcon;
  }

  return posFallback(p);
}
