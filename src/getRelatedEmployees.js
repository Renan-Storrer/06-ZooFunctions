const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((pessoaAtual) => pessoaAtual.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
