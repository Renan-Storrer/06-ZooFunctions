const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employees = data.employees.find((employee) => employee.id === id);
  const specieId = employees.responsibleFor[0];
  const species = data.species.find((specie) => specieId === specie.id);
  const { residents } = species;
  const animal = residents.sort((a, b) => b.age - a.age)[0];
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
