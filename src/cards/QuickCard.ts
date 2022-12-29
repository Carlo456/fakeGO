import Card from './Card';
class QuickCard extends Card {
  private _crit_rate: number;
  private _crit_dmg: number;
  constructor(
    type: string,
    num_hits: number,
    modifier: number,
    crit_rate: number,
    crit_dmg: number
  ) {
    super(type, num_hits, modifier);
    this._modifier = modifier;
    this._crit_rate = crit_rate;
    this._crit_dmg = crit_dmg;
  }
  //normal quick attack
  public attack(num_hits: number, modifier: number){
    let total_dmg = num_hits * modifier + 200;
    return total_dmg;
  }
  //critical hit function
  public critical_hit(num_hits: number, modifier: number, crit_dmg: number | null): number{
    if(crit_dmg === null){
        crit_dmg = 1;
    }
    let total_dmg = num_hits * modifier * crit_dmg;
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
  // crit rate getter and setter
  get crit_rate(): number {
    return this._crit_rate;
  }
  set crit_rate(crit_rate: number) {
    this._crit_rate = crit_rate;
  }
  // crit damage getter and setter
  get crit_dmg(): number {
    return this._crit_dmg;
  }
  set crit_dmg(crit_dmg: number) {
    this._crit_dmg = crit_dmg;
  }
}

export default QuickCard;