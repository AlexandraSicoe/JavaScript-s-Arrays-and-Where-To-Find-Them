const getOldestCreature = (data) => {
  let oldestCreature = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].age > oldestCreature.age) {
      oldestCreature = data[i];
    }
  }
  return oldestCreature;
};

const getSumOfPowerLvl = (data) => {
  let sum = 0;
  data.forEach((creature) => {
    sum = creature.powerLevel + sum;
  });
  return sum;
};

const getAverageMagic = (data) => {
  let sum = 0;
  data.forEach((creature) => {
    sum = creature.powerLevel + sum;
  });

  var averageMagic = sum / data.length;
  return averageMagic;
};

const getSpecies = (data) => {
  var species = {};
  data.forEach((creature) => {
    if (!species[creature.type]) {
      species[creature.type] = 1;
    } else {
      species[creature.type] = species[creature.type] + 1;
    }
  });
  console.log(species);
  var mostPopularSpeciesName;
  var mostPopularSpeciesNr = 0;
  for (const specie in species) {
    if (mostPopularSpeciesNr < species[specie]) {
      mostPopularSpeciesNr = species[specie];
      mostPopularSpeciesName = specie;
    }
  }
  console.log(mostPopularSpeciesName);
  console.log(mostPopularSpeciesNr);
  var mostPopularSpecie = {
    name: mostPopularSpeciesName,
    count: mostPopularSpeciesNr,
  };
  return mostPopularSpecie;
};

const getCreatureByPower = (data) => {
  var strongestCreatures = data.filter(
    (creature) => (strongestCreatures = creature.powerLevel >= 5)
  );
  return strongestCreatures;
};

const sortByAge = (data) => {
  data.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
  return data;
};
const getFluffy = (data) => {
  var whereIsFluffy = data.filter(
    (creature) => (whereIsFluffy = creature.name == "Fluffy")
  );
  return whereIsFluffy;
};
const getRandomCompanion = (data) => {
  let randomIndex = Math.floor(Math.random() * data.length);
  const randomCompanion = data[randomIndex];
  return randomCompanion;
};
const getStrongestCreature = (data) => {
  var strongestAround = data.sort(function (a, b) {
    if (a.powerLevel < b.powerLevel) {
      return -1;
    }
    if (a.powerLevel > b.powerLevel) {
      return 1;
    }
    return 0;
  });
  return strongestAround[data.length - 1];
};

const getRatio = (data) => {
  let ratio;
  let bestCreatureRatio = data[0];
  data.forEach((creature) => {
    creature.ratio = creature.powerLevel / creature.age;
    if (bestCreatureRatio.ratio < creature.ratio) {
      bestCreatureRatio = creature;
    }
  });
  return bestCreatureRatio;
};
module.exports = {
  getOldestCreature,
  getSumOfPowerLvl,
  getAverageMagic,
  getSpecies,
  getCreatureByPower,
  sortByAge,
  getFluffy,
  getRandomCompanion,
  getStrongestCreature,
  getRatio,
};
