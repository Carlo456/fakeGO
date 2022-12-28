import Card from "./Card";
class BusterCard extends Card {
    private _modifier: number;
    constructor(
        type: string,
        num_hits: number,
        modifier: number,
      ) {
        super(type, num_hits);
        this._modifier = modifier;
      }
    public buster_attack(num_hits: number | null, modifier: number | null){
      if(num_hits === null){
        num_hits = this._num_hits
      }
      if(modifier === null){
        modifier = this._modifier
      }
      let total_dmg = num_hits * modifier;
      return total_dmg;
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

export default BusterCard;