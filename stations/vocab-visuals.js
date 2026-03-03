// vocab-visuals.js
// Clean + safe Pixel visuals for Vocabulary Station

export const SET_VISUALS = {

  // UNIT 1
  u1_verbs_opposites:      { iconKey: "swap",      accent: "mint" },
  u1_feelings_adjectives:  { iconKey: "mood",      accent: "yellow" },
  u1_time_capsules_extra:  { iconKey: "box",       accent: "blue" },

  // UNIT 2
  u2_adjectives_synonyms:  { iconKey: "spark",     accent: "pink" },
  u2_materials:            { iconKey: "layers",    accent: "orange" },
  u2_art_artists_extra:    { iconKey: "palette",   accent: "purple" },

  // UNIT 3
  u3_outdoor_leisure_activities: { iconKey: "activity", accent: "mint" },
  u3_outdoor_events:              { iconKey: "ticket",   accent: "pink" },
  u3_parks_features_extra:        { iconKey: "tree",     accent: "green" },

  // UNIT 4
  u4_personality_adjectives: { iconKey: "person",  accent: "purple" },
  u4_phrasal_verbs:          { iconKey: "puzzle",  accent: "blue" },
  u4_good_deeds_extra:       { iconKey: "heart",   accent: "red" },

  // UNIT 5
  u5_senses:        { iconKey: "senses",  accent: "yellow" },
  u5_gaming_verbs:  { iconKey: "gamepad", accent: "mint" },
  u5_games_extra:   { iconKey: "gamepad", accent: "blue" },

  // UNIT 6
  u6_exercise_body:           { iconKey: "fitness",  accent: "orange" },
  u6_personal_hygiene:        { iconKey: "hygiene",  accent: "blue" },
  u6_morning_routines_extra:  { iconKey: "calendar", accent: "yellow" },

  // UNIT 7
  u7_learning_noun_pairs:   { iconKey: "cap",     accent: "purple" },
  u7_verbs:                 { iconKey: "chat",    accent: "mint" },
  u7_online_learning_extra: { iconKey: "laptop",  accent: "blue" },

  // UNIT 8
  u8_summer_holidays:     { iconKey: "sun",        accent: "yellow" },
  u8_jobs:                { iconKey: "briefcase",  accent: "orange" },
  u8_school_events_extra: { iconKey: "calendar",   accent: "pink" }
};

const STICKERS = [
  "⭐", "🔥", "💥", "🏆", "🎯", "⚡"
];

/**
 * Safe visual generator
 * Always returns valid object
 */
export function getVisualForCard(setId, wordOrPhrase) {

  const base = SET_VISUALS[setId] || {
    iconKey: "calendar",
    accent: "blue"
  };

  const sticker =
    Math.random() < 0.25
      ? STICKERS[Math.floor(Math.random() * STICKERS.length)]
      : "";

  return {
    iconKey: base.iconKey || "calendar",
    accent: base.accent || "blue",
    pattern: "pixels",
    sticker
  };
}
