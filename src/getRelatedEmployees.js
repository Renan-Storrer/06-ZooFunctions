const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((pessoaAtual) => pessoaAtual.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.reduce((acc, val) => {
    const { managers, firstName, lastName} = val;
    if (managers.includes(managerId)) {
      acc.push(`${firstName} ${lastName}`)
    } return acc
  }, [])
}

module.exports = { isManager, getRelatedEmployees };
