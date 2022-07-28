const data = require('../data/zoo_data');

function countAnimals(animal) {
  const todosAnimais = data.species;
  if (animal === undefined) {
    const result = {};
    todosAnimais.forEach((elemento) => {
      result[[elemento.name]] = elemento.residents.length;
    });
    return result;
  }
  const { specie, sex = 'sexoDoAnimal' } = animal;
  const animalEscolhido = todosAnimais.find((elemento) => elemento.name === specie);
  if (sex === 'sexoDoAnimal') {
    return animalEscolhido.residents.length;
  }
  return animalEscolhido.residents.filter(({ sex: sexo }) => sexo === sex).length;
}

module.exports = countAnimals;
