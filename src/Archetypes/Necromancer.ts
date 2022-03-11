import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _hability: EnergyType;
  private static _necromancerCount = 0;

  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Necromancer.necromancerCount();
  }

  private static necromancerCount() {
    this._necromancerCount += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._necromancerCount;
  }

  public get energyType(): EnergyType {
    return this._hability;
  }
}

export default Necromancer;
