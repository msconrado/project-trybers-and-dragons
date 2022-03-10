class Archetype {
  protected _special: number;
  protected _cost: number;
  private static _archetypeInstances = 0;

  constructor(protected _name: string) {
    this._special = 0;
    this._cost = 0;
    Archetype.archetypeInstances();
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

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  private static archetypeInstances(): void {
    this._archetypeInstances += 1;
  }
}

export default Archetype;
