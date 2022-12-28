import ArtCard from "./ArtCard";
import BusterCard from "./BusterCard";
import QuickCard from "./QuickCard";

abstract class Card {
  private readonly _type: string;
  protected _num_hits: number;
  constructor(type: string, num_hits: number) {
    this._type = type;
    this._num_hits = num_hits;
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