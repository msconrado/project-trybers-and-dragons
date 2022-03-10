class Archetype {
  protected _special: number;
  protected _cost: number;

  constructor(protected _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }
}

export default Archetype;
