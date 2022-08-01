const data = require('../data/zoo_data');

const { species, hours } = data;

const diaSemana = (dia) => {
  if (dia === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  const animals = species.filter((element) => element.availability.includes(dia));
  const exhibition = animals.map((element) => element.name);
  const officeHour = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
  const result = {
    officeHour,
    exhibition,
  };
  return result;
};

function getSchedule(scheduleTarget) {
  const dias = Object.keys(hours);
  if (dias.includes(scheduleTarget)) {
    const scheduleOfTheDay = {};
    scheduleOfTheDay[scheduleTarget] = diaSemana(scheduleTarget);
    return scheduleOfTheDay;
  }
  if (!scheduleTarget || !species.some((element) => element.name === scheduleTarget)) {
    const availability = {};
    for (let i = 0; i < dias.length; i += 1) {
      availability[dias[i]] = (diaSemana(dias[i]));
    }
    return availability;
  }
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
