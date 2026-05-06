const factors = [
  { name: "Genetic Inheritance", min: 9.333, max: 10.777 },
  { name: "Constitutional Vitality", min: 8.111, max: 9.111 },
  { name: "Mental Patterns", min: 6.111, max: 7.111 },
  { name: "Intellectual Capacity", min: 6.333, max: 6.999 },
  { name: "Emotional Foundation", min: 7.111, max: 7.999 },
  { name: "Spiritual Lineage", min: 5.011, max: 6.011 },
  { name: "Soul Connections", min: 5.111, max: 6.222 },
];

function generateData(day) {
  const isMotherDominant = day % 2 === 1;

  let rows = factors.map((f, index) => {
    let mid = (f.min + f.max) / 2;

    // small variation using day
    let total = mid + (day - 15) * 0.01;

    // clamp inside range
    total = Math.max(f.min, Math.min(f.max, total));

    let bonus = 0.05;

    let mother, father;

    if (isMotherDominant) {
      mother = total * (0.5 + bonus);
      father = total - mother;
    } else {
      father = total * (0.5 + bonus);
      mother = total - father;
    }

    return {
      factor: f.name,
      mother,
      father,
      total,
      min: f.min,
      max: f.max,
    };
  });

  // normalize to 100
  let sum = rows.reduce((acc, r) => acc + r.total, 0);
  let factor = 100 / sum;

  rows = rows.map(r => {
    let newMother = r.mother * factor;
    let newFather = r.father * factor;
    let newTotal = newMother + newFather;

    return {
      ...r,
      mother: +newMother.toFixed(3),
      father: +newFather.toFixed(3),
      total: +newTotal.toFixed(3),
    };
  });

  return {
    dominant: isMotherDominant ? "Mother" : "Father",
    rows,
    overallTotal: 100,
  };
}

module.exports = { generateData };