//game imports
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//player imports
import Servant from "./characters/Servant";
import Card from "./cards/Card";
import Ability from "./abilities/Ability";
import Enemy from "./characters/Enemy";
/*
let card1: Card = {
  type: "Buster",
};
let card2: Card = {
  type: "Buster",
};
let card3: Card = {
  type: "Buster",
};
let card4: Card = {
  type: "Quick",
};
let card5: Card = {
  type: "Arts",
};

let ability1: Ability = {
  name: "Stealth action",
};
let ability2: Ability = {
  name: "Poison body",
};
let ability3: Ability = {
  name: "Daggers upgrade",
};

const testDeck: Card[] = [card1, card2, card3, card4, card5];

const testAbilityPool: Ability[] = [ability1, ability2, ability3];
*/
const servant1 = new Servant(1, "Serenity", "Assasin", 1675, 1232);
const enemy1 = new Enemy(100, "Angry goblin", "Saber", 14000, 200);

// own servant
console.log("Player info...");
console.log(servant1.showServantInfo());
//console.log("My combat information is....");
//console.log(servant1.cardDeck(testDeck));
//console.log(servant1.servantAbilities(testAbilityPool));

//enemy
console.log("Enemy info...");
console.log(enemy1.showServantInfo());
//console.log("Enemy combat information is....");
//console.log(enemy1.cardDeck(testDeck));
//console.log(enemy1.servantAbilities(testAbilityPool));

async function game() {
  const actions = readline.createInterface({ input, output });
  //game cycle

  do {
    //player turn
    const playerTurn = await actions.question("What do you want to do? ");
    console.log(`${servant1.name} used ${playerTurn} action...`);
    console.log(
      `Enemy ${enemy1.name} lost ${servant1.atk} health, now ${
        enemy1.name
      } has ${enemy1.hp -= servant1.atk} hp`
    );
    console.log(`End of ${servant1.name} turn...`);

    //enemy turn
    console.log(`${enemy1.name} used ${playerTurn} action...`);
    console.log(
      `Player ${servant1.name} lost ${enemy1.atk} health, now ${
        servant1.name
      } has ${servant1.hp -= enemy1.atk} hp`
    );
    console.log(`End of ${enemy1.name} turn...`);
  } while (servant1.hp > 0 && enemy1.hp > 0);
  //end of battle
  console.log(`Battle ended...`)
  if(servant1.hp <= 0){
    console.log(`${servant1.name} lost the battle...`)
  } else {
    console.log(`${enemy1.name} lost the battle...`)
  }
  actions.close();
}

game();

