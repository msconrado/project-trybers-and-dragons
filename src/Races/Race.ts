class Race {
  private static _racesInstances = 0;

  constructor(private _name: string, private _dexterity: number) {
    Race.racesInstances();
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  private static racesInstances(): void {
    this._racesInstances += 1;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;
