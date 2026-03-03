import { getVisualForCard } from "./vocab-visuals.js";

/* vocabulary.js
   Synchronize 2 — Units 1–8 (Language Summary vocabulary)
   Ready for:
   - Flashcards (bulk)
   - Visual cards (emoji/stickers/patterns)
   - Word-family builder
   - Song/chant generator
*/

export const VOCAB_DB = {
  meta: {
    course: "Synchronize 2",
    scope: "Units 1–8 Language Summary vocabulary",
    version: "1.1.0"
  },

  units: [
    // UNIT 1 — Then and now
    {
      unit: 1,
      title: "Then and now",
      sets: [
        {
          setId: "u1_verbs_opposites",
          label: "Verbs and their opposites",
          type: "pairs",
          items: [
            { a: "agree", b: "disagree" },
            { a: "appear", b: "disappear" },
            { a: "borrow", b: "lend" },
            { a: "buy", b: "sell" },
            { a: "connect", b: "disconnect" },
            { a: "lose", b: "win" },
            { a: "save", b: "spend" },
            { a: "send", b: "receive" }
          ]
        },
        {
          setId: "u1_feelings_adjectives",
          label: "Adjectives for feelings",
          type: "words",
          items: [
            "annoyed","bored","embarrassed","excited","relaxed",
            "scared","surprised","tired","unhappy","worried"
          ]
        },
        {
          setId: "u1_time_capsules_extra",
          label: "EXTRA — Time capsules",
          type: "words",
          items: [
            "close","container","cupboard","ground","hide",
            "include","inside","items","outside","safe"
          ]
        }
      ]
    },

    // UNIT 2
    {
      unit: 2,
      title: "Unit 2",
      sets: [
        {
          setId: "u2_adjectives_synonyms",
          label: "Adjectives and synonyms",
          type: "pairs",
          items: [
            { a: "attractive", b: "pretty" },
            { a: "awful", b: "terrible" },
            { a: "bright", b: "colourful" },
            { a: "brilliant", b: "incredible" },
            { a: "enormous", b: "huge" },
            { a: "unusual", b: "strange" }
          ]
        },
        {
          setId: "u2_materials",
          label: "Materials",
          type: "words",
          items: ["cardboard","cotton","glass","leather","metal","paper","plastic","wood","wool"]
        },
        {
          setId: "u2_art_artists_extra",
          label: "EXTRA — Art and artists",
          type: "words",
          items: [
            "dance","design","illustration","music","paint","photograph","sculpture","street art",
            "dancer","designer","illustrator","musician","painter","photographer","sculptor","street artist"
          ]
        }
      ]
    },

    // UNIT 3
    {
      unit: 3,
      title: "Unit 3",
      sets: [
        {
          setId: "u3_outdoor_leisure_activities",
          label: "Outdoor leisure activities",
          type: "words",
          items: [
            "cycling","drone flying","free running","Frisbee throwing","in-line skating",
            "jogging","kite-flying","microscooting","rowing","working out"
          ]
        },
        {
          setId: "u3_outdoor_events",
          label: "Outdoor events",
          type: "words",
          items: [
            "arts and crafts market","carnival","car show","charity football match","concert",
            "food (truck) festival","funfair","fun run","music festival","outdoor cinema"
          ]
        },
        {
          setId: "u3_parks_features_extra",
          label: "EXTRA — Features of parks",
          type: "words",
          items: [
            "bench","bridge","café","duck pond","lake","open-air theatre","outdoor gym",
            "path","picnic area","playground","skatepark"
          ]
        }
      ]
    },

    // UNIT 4 — A helping hand
    {
      unit: 4,
      title: "A helping hand",
      sets: [
        {
          setId: "u4_personality_adjectives",
          label: "Personality adjectives",
          type: "words",
          items: [
            "impatient","lazy","mean","rude","shy","unhelpful","unkind",
            "patient","hard-working","generous","polite","confident","helpful","kind"
          ]
        },
        {
          setId: "u4_phrasal_verbs",
          label: "Phrasal verbs",
          type: "words",
          items: [
            "find out","go away","look after","look at","pick up",
            "take part in","talk over","turn off","turn on","work out"
          ]
        },
        {
          setId: "u4_good_deeds_extra",
          label: "EXTRA — Good deeds",
          type: "phrases",
          items: [
            "donate (something) to charity",
            "offer your seat to (someone) on public transport",
            "volunteer at (a place)",
            "help (someone) across the street",
            "put (something) in the bin",
            "write a thank you message"
          ]
        }
      ]
    },

    // UNIT 5 — Let’s play
    {
      unit: 5,
      title: "Let’s play",
      sets: [
        {
          setId: "u5_senses",
          label: "Senses",
          type: "words",
          items: [
            "ears","hearing","mouth","nose","pattern","sight","smell","smooth","soft",
            "stare","sweet","taste","tongue","touch","voice"
          ]
        },
        {
          setId: "u5_gaming_verbs",
          label: "Gaming verbs",
          type: "words",
          items: [
            "avoid","balance","beat","collect","compete","continue","control",
            "dislike","hurt","recognize","solve","worry"
          ]
        },
        {
          setId: "u5_games_extra",
          label: "EXTRA — Games",
          type: "words",
          items: [
            "board game","card game","experience","imagination","knowledge","luck","memory","patience",
            "quiz game","role-playing game","speed","strategy","thought","vocabulary","word game"
          ]
        }
      ]
    },

    // UNIT 6
    {
      unit: 6,
      title: "Unit 6",
      sets: [
        {
          setId: "u6_exercise_body",
          label: "Exercise and the body",
          type: "words",
          items: [
            "bones","brain","burn calories","get fit","heart","injury","lose weight",
            "lungs","muscles","pain","rest","stretch","train","warm up"
          ]
        },
        {
          setId: "u6_personal_hygiene",
          label: "Personal hygiene",
          type: "phrases",
          items: [
            "brush your hair / your teeth",
            "change your socks / your toothbrush",
            "cut your fingernails / your toenails / your hair",
            "go to the dentist / the hairdresser",
            "prevent spots / smelly feet / illness",
            "use deodorant / antiperspirant / soap / shampoo"
          ]
        },
        {
          setId: "u6_morning_routines_extra",
          label: "EXTRA — Morning routines",
          type: "words",
          items: [
            "active","alarm","asleep","energy","fit","fresh","get up","lifestyle","personal hygiene","wake up"
          ]
        }
      ]
    },

    // UNIT 7 — Skills for life
    {
      unit: 7,
      title: "Skills for life",
      sets: [
        {
          setId: "u7_learning_noun_pairs",
          label: "Verbs and nouns related to learning",
          type: "pairs",
          items: [
            { a: "achieve", b: "achievement" },
            { a: "behave", b: "behaviour" },
            { a: "decide", b: "decision" },
            { a: "know", b: "knowledge" },
            { a: "learn", b: "learning" },
            { a: "move", b: "movement" },
            { a: "respond", b: "response" },
            { a: "solve", b: "solution" },
            { a: "speak", b: "speech" },
            { a: "train", b: "training" }
          ]
        },
        {
          setId: "u7_verbs",
          label: "Verbs",
          type: "words",
          items: [
            "communicate","consider","discover","educate","expect","experience","offer","provide","suggest","support"
          ]
        },
        {
          setId: "u7_online_learning_extra",
          label: "EXTRA — Online learning",
          type: "phrases",
          items: [
            "check a fact",
            "distract you from (something)",
            "find answers",
            "find out about (something)",
            "learn from others",
            "research a subject",
            "search for information",
            "stay focused",
            "use a search engine",
            "use online resources"
          ]
        }
      ]
    },

    // UNIT 8
    {
      unit: 8,
      title: "Unit 8",
      sets: [
        {
          setId: "u8_summer_holidays",
          label: "Things to do during the summer holidays",
          type: "phrases",
          items: [
            "arrange (a day out)",
            "attend (a course)",
            "borrow (a tent)",
            "build (something)",
            "contact (someone)",
            "explore (somewhere new)",
            "improve (your skills)",
            "organize (a camping trip)",
            "repair (your bike)",
            "teach (yourself a new skill)"
          ]
        },
        {
          setId: "u8_jobs",
          label: "Jobs",
          type: "words",
          items: [
            "astronaut","baker","builder","cook","dentist","detective","engineer",
            "fashion designer","hairdresser","lawyer","manager","musician","police officer",
            "racing driver","songwriter","video games designer"
          ]
        },
        {
          setId: "u8_school_events_extra",
          label: "EXTRA — School events and activities",
          type: "phrases",
          items: [
            "end-of-year dance",
            "guest-speaker talk",
            "school play",
            "school trip",
            "sports day"
          ]
        }
      ]
    }
  ]
};

/** Flattens database into card objects ready for UI. */
export function flattenVocab(db = VOCAB_DB) {
  const out = [];
  for (const u of db.units) {
    for (const set of u.sets) {
      if (set.type === "pairs") {
        for (const p of set.items) {
          const front = p.a, back = p.b;
          out.push({
            unit: u.unit,
            unitTitle: u.title,
            setId: set.setId,
            setLabel: set.label,
            type: "pair",
            front,
            back,
            visual: getVisualForCard(set.setId, front)
          });
        }
      } else {
        for (const item of set.items) {
          out.push({
            unit: u.unit,
            unitTitle: u.title,
            setId: set.setId,
            setLabel: set.label,
            type: set.type,
            front: item,
            back: "",
            visual: getVisualForCard(set.setId, item)
          });
        }
      }
    }
  }
  return out;
}

/** Utility helpers (optional but very useful in stations) */
export function listUnits(db = VOCAB_DB) {
  return db.units.map(u => ({ unit: u.unit, title: u.title }));
}

export function listSets(db = VOCAB_DB, unitNumber = null) {
  const units = unitNumber ? db.units.filter(u => u.unit === unitNumber) : db.units;
  const sets = [];
  for (const u of units) {
    for (const s of u.sets) sets.push({ unit: u.unit, setId: s.setId, label: s.label, type: s.type });
  }
  return sets;
}

export function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getCards(db = VOCAB_DB, { unit = null, setId = null } = {}) {
  let cards = flattenVocab(db);
  if (unit != null) cards = cards.filter(c => c.unit === unit);
  if (setId) cards = cards.filter(c => c.setId === setId);
  return cards;
}
