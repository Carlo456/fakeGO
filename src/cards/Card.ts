abstract class Card {
  private readonly _type: string;
  protected _num_hits: number;
  protected _modifier: number;

  constructor(type: string, num_hits: number, modifier: number) {
    this._type = type;
    this._num_hits = num_hits;
    this._modifier = modifier
  }
  public attack(num_hits: number | null, modifier: number | null){
    if(num_hits === null){
      num_hits = this._num_hits
    }
    if(modifier === null){
      modifier = this._modifier
    }
    let total_dmg = num_hits * modifier;
    return total_dmg;
  }
  // servant getter and setter
  // get type only
  get type(): string {
    return this._type;
  }
  // get and set num_hits
  // servant getter and setter
  get num_hits(): number {
    return this.num_hits;
  }
  set num_hits(num_hits: number) {
    this._num_hits = num_hits;
  }

}

export default Card;