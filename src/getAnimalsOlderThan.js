const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const chosenAnimal = data.species.find((animalEscolhido) => animalEscolhido.name === animal);
  return chosenAnimal.residents.every((animais) => animais.age >= age);
}
module.exports = getAnimalsOlderThan;
