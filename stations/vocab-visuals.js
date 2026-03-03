// vocab-visuals.js
// Pixel/Arcade visuals (no emojis). Works with vocab-icons.js (VOCAB_ICONS).

export const SET_VISUALS = {
  // Unit 1
  u1_verbs_opposites: { iconKey: "swap", pattern: "pixels", accent: "mint" },
  u1_feelings_adjectives: { iconKey: "mood", pattern: "pixels", accent: "yellow" },
  u1_time_capsules_extra: { iconKey: "box", pattern: "pixels", accent: "blue" },

  // Unit 2
  u2_adjectives_synonyms: { iconKey: "spark", pattern: "pixels", accent: "pink" },
  u2_materials: { iconKey: "layers", pattern: "pixels", accent: "orange" },
  u2_art_artists_extra: { iconKey: "palette", pattern: "pixels", accent: "purple" },

  // Unit 3
  u3_outdoor_leisure_activities: { iconKey: "activity", pattern: "pixels", accent: "mint" },
  u3_outdoor_events: { iconKey: "ticket", pattern: "pixels", accent: "pink" },
  u3_parks_features_extra: { iconKey: "tree", pattern: "pixels", accent: "green" },

  // Unit 4
  u4_personality_adjectives: { iconKey: "person", pattern: "pixels", accent: "purple" },
  u4_phrasal_verbs: { iconKey: "puzzle", pattern: "pixels", accent: "blue" },
  u4_good_deeds_extra: { iconKey: "heart", pattern: "pixels", accent: "red" },

  // Unit 5
  u5_senses: { iconKey: "senses", pattern: "pixels", accent: "yellow" },
  u5_gaming_verbs: { iconKey: "gamepad", pattern: "pixels", accent: "mint" },
  u5_games_extra: { iconKey: "gamepad", pattern: "pixels", accent: "blue" },

  // Unit 6
  u6_exercise_body: { iconKey: "fitness", pattern: "pixels", accent: "orange" },
  u6_personal_hygiene: { iconKey: "hygiene", pattern: "pixels", accent: "blue" },
  u6_morning_routines_extra: { iconKey: "clock", pattern: "pixels", accent: "yellow" }, // if you don't have "clock" icon, change to "calendar"

  // Unit 7
  u7_learning_noun_pairs: { iconKey: "cap", pattern: "pixels", accent: "purple" },
  u7_verbs: { iconKey: "chat", pattern: "pixels", accent: "mint" },
  u7_online_learning_extra: { iconKey: "laptop", pattern: "pixels", accent: "blue" },

  // Unit 8
  u8_summer_holidays: { iconKey: "sun", pattern: "pixels", accent: "yellow" },
  u8_jobs: { iconKey: "briefcase", pattern: "pixels", accent: "orange" },
  u8_school_events_extra: { iconKey: "calendar", pattern: "pixels", accent: "pink" }
};

// Pixel badges (optional)
const STICKERS = [
  "⭐", "🔥", "💥", "✅", "🏆", "🎯", "⚡", "🪄", "💎", "🚀"
];

// Optional word-based icon overrides (for a few obvious words)
function overrideIconByWord(wordOrPhrase, currentKey) {
  const w = String(wordOrPhrase || "").toLowerCase();

  if (w.includes("dentist")) return "tooth";       // only if you create "tooth" icon
  if (w.includes("hairdresser")) return "scissors"; // only if you create "scissors" icon
  if (w.includes("volunteer")) return "heart";
  if (w.includes("bike")) return "activity";
  if (w.includes("game")) return "gamepad";
  if (w.includes("online") || w.includes("search engine")) return "laptop";

  return currentKey;
}

/**
 * Returns visual metadata for a vocab card.
 * Output:
 *  { iconKey, pattern, accent, sticker }
 */
export function getVisualForCard(setId, wordOrPhrase) {
  const base = SET_VISUALS[setId] || {
    iconKey: "calendar",
    pattern: "pixels",
    accent: "blue"
  };

  // Add an occasional sticker for variety (25%)
  const sticker = Math.random() < 0.25
    ? STICKERS[Math.floor(Math.random() * STICKERS.length)]
    : "";

  // Icon overrides (safe: only changes if you implement those keys)
  const iconKey = overrideIconByWord(wordOrPhrase, base.iconKey);

  return { ...base, iconKey, sticker };
}
