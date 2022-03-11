import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _hability: EnergyType;
  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Mage.mageInstances();
  }

  private static mageInstances() {
    this._mageInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Mage;
