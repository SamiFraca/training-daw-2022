'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple(pilot) {
  for (let index = 0; index < pilot.length; index++) {
    const element = pilot[index];
    console.log(element)
  }
}
function iterateForEach(pilot) {
  pilot.forEach(element => {
    console.log(element)
  });
}
function mapIds() {
  pilots.map((pilot) => {
    console.log(pilot.id)
  })
}
function rebels(pilot) {
  return pilot.filter(rebels => rebels.faction === "Rebels")
}
function totalFaction(Faction) {
  return (pilots.filter(rebels => rebels.faction === Faction)).length
}
function avgYears(faction) {
  return pilots.filter(rebels => rebels.faction === faction).reduce((a, b) => a + b.years, 0) / pilots.filter(rebels => rebels.faction === faction).length
}
iterateSimple(pilots)
iterateForEach(pilots)
try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

assert.deepStrictEqual(totalFaction("Rebels"), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}