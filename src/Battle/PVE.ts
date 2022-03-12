import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    public player1: Character | Fighter,
    public monstersOrPlayer: Monster[] | SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    this.monstersOrPlayer.forEach((monster) => {
      this.player1.attack(monster);

      monster.attack(this.player1);
    });

    return super.fight();
  }
}

export default PVE;
