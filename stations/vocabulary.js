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
