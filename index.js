var codex = require("./data.json");

const codexEdits = require("./utilities.js");
console.log(codex);

const oldestCreature = codexEdits.getOldestCreature(codex);
console.log(oldestCreature.name + " " + oldestCreature.age);

const powerLevelSum = codexEdits.getSumOfPowerLvl(codex);
console.log(powerLevelSum);

const averageMagic = codexEdits.getAverageMagic(codex);
console.log(averageMagic);

const mostPopularSpecie = codexEdits.getSpecies(codex);
console.log(mostPopularSpecie);

const strongestCreatures = codexEdits.getCreatureByPower(codex);
console.log(strongestCreatures);

const sortedCreatures = codexEdits.sortByAge(codex);
console.log(sortedCreatures);

const iFoundFluffy = codexEdits.getFluffy(codex);
console.log(iFoundFluffy);

const newCompanion = codexEdits.getRandomCompanion(codex);
console.log(newCompanion);

console.log("meow");
const strongestAround = codexEdits.getStrongestCreature(codex);
console.log(strongestAround);

const ratio = codexEdits.getRatio(codex);

console.log(codex);
console.log(ratio);
