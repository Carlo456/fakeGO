import Card from "./Card";
class ArtCard extends Card {
  private _modifier: number;
  private _hogu_charge: number = 0;
  constructor(
    type: string,
    num_hits: number,
    modifier: number,
    hogu_charge: number
  ) {
    super(type, num_hits);
    this._modifier = modifier;
    this._hogu_charge = hogu_charge;
  }
  //normal art card attack
  public art_attack(num_hits: number, modifier: number){
    let total_dmg = num_hits * modifier;
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