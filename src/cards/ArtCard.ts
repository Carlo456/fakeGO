import Card from "./Card";
class ArtCard extends Card {
  private _hogu_charge: number = 0;
  constructor(
    type: string,
    num_hits: number,
    modifier: number,
    hogu_charge: number
  ) {
    super(type, num_hits, modifier);
    this._hogu_charge = hogu_charge;
  }
  //normal art card attack
  public attack(num_hits: number, modifier: number){
    let total_dmg = num_hits * modifier + 100;
    return total_dmg;
  }  
  //charge attack TODO: make buffs disponibles
  charge_up(): number {
    return this._hogu_charge++;
  }
  // getters and setters
  // modifier getter and setter
  get modifier(): number {
    return this._modifier;
  }
  set modifier(modifier: number) {
    this._modifier = modifier;
  }
}

export default ArtCard;