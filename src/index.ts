//game imports
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//player imports
import Servant from "./characters/Servant";
import Card from "./cards/Card";
import BusterCard from "./cards/BusterCard";
import ArtCard from "./cards/ArtCard";
import QuickCard from "./cards/QuickCard";
import Ability from "./abilities/Ability";
import Enemy from "./characters/Enemy";

let card1: Card = new BusterCard("Buster", 6, 1.30);
let card2: Card = new ArtCard("Art", 3, 1.05, 1);
let card3: Card = new ArtCard("Art", 3, 1.05, 1);
let card4: Card = new QuickCard("Quick", 4, 0.9, .5, 1.5);
let card5: Card = new QuickCard("Quick", 4, 0.9, .75,1.25);

let ability1: Ability = {
  name: "Stealth action",
};
let ability2: Ability = {
  name: "Poison body",
};
let ability3: Ability = {
  name: "Daggers upgrade",
};

const testDeck = [card1, card2, card3, card4, card5];

const servant1 = new Servant(1, "Serenity", "Assasin", 1675, 1000, testDeck); // atk 1232
const enemy1 = new Enemy(100, "Angry goblin", "Saber", 14000, 200, testDeck);

async function game() {
  const actions = readline.createInterface({ input, output });
  //game cycle

  do {
    //player turn
    const playerTurn = await actions.question("What do you want to do? ");
    console.log(`${servant1.name} used ${playerTurn} action...`);
    console.log(
      `Enemy ${enemy1.name} lost ${servant1.atk * servant1.card_deck[0].attack(null, null)} health, now ${
        enemy1.name
      } has ${enemy1.hp -= servant1.atk * servant1.card_deck[0].attack(null, null)} hp`
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

