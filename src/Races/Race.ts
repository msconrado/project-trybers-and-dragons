class Race {
  constructor(private name: string, private dexterity: number) {}

  public get getName(): string {
    return this.name;
  }

  public get getDexterity(): number {
    return this.dexterity;
  }
}
