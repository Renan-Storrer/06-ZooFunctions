const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animalAtual) => ids.includes(animalAtual.id));
}

module.exports = getSpeciesByIds;
