const data = require('../data/zoo_data');

function idade(entrants) {
  let seniorC = 0;
  let AdultC = 0;
  let childC = 0;
  entrants.forEach((visitant) => {
    if (visitant.age < 18) {
      childC += 1;
    }
    if (visitant.age >= 18 && visitant.age < 50) {
      AdultC += 1;
    }
    if (visitant.age >= 50) {
      seniorC += 1;
    }
  });
  return [childC, AdultC, seniorC];
}

function countEntrants(entrants) {
  const [childC, AdultC, seniorC] = idade(entrants);
  return { child: childC, adult: AdultC, senior: seniorC };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const [childC, AdultC, seniorC] = idade(entrants);
  return (childC * 20.99) + (AdultC * 49.99) + (seniorC * 24.99);
}

module.exports = { calculateEntry, countEntrants };
