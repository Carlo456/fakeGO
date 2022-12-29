import Card from '../cards/Card';
import Ability from '../abilities/Ability';
import Character from './Character';

class Servant extends Character{
    private rankQuest?: number;
    private interludeQuest?: number;
    private hogu?: Card;

    constructor(_id:number, _name: string, _servantClass: string, _hp: number, _atk: number, _card_deck: Card[]){
        super(_id, _name, _servantClass, _hp, _atk, _card_deck);
    }

    public servantAbilities(abilities: Ability[]): Ability[]{
        console.log(abilities);
        return abilities;
    }
    //getters and setters
    // id getter
    get id(): number {
        return this._id;
    }
    // name getter
    get name(): string {
        return this._name
    }
    // servant getter and setter
    get servantClass(): string {
        return this._servantClass;
    }
    set servantClass(servantClass: string) {
        this._servantClass = servantClass;
    }
    // hp getter and setter
    get hp(): number {
        return this._hp;
    }
    set hp(health: number) {
        this._hp = health;
    }
    // atk getter and setter
    get atk(): number {
        return this._atk;
    }
    set atk(attack: number) {
        this._atk = attack;
    }

    showServantInfo(): string{
        return `Hello I'm the servant with ID: ${this._id}, my name is: ${this._name}, ${this._servantClass}, also my stats are: \nHP: ${this._hp}\nAttack: ${this._atk}`;
    }

}

export default Servant;