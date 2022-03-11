import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _hability: EnergyType;
  private static _warriorCount = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'stamina';
    Warrior.warriorCount();
  }

  private static warriorCount() {
    this._warriorCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._warriorCount;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Warrior;
