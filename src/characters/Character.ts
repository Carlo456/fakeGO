import Card from '../cards/Card';
import Ability from '../abilities/Ability';

 abstract class Character {
    protected readonly _id: number;
    protected readonly _name: string;
    protected _servantClass: string
    protected _hp: number;
    protected _atk: number;
    protected _card_deck: Card[];

    constructor(id: number, name:string, servantClass:string, hp: number, atk: number, card_deck: Card[]){
        this._id = id;
        this._name = name;
        this._servantClass = servantClass;
        this._hp = hp;
        this._atk = atk;
        this._card_deck = card_deck;
    }

    
    servantAbilities(abilities: Ability[]){
        return abilities;
    }
    
    showServantInfo(): string{
        return `Hello I'm the servant with ID: ${this._id}, my name is: ${this._name}, ${this._servantClass}, also my stats are: \nHP: ${this._hp}\nAttack: ${this._atk}`;
    }
    // modifier getter and setter
    get card_deck(): Card[] {
        return this._card_deck;
    }
}

export default Character;