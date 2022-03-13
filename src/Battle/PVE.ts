import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    public player1: Fighter,
    public monstersOrPlayer: SimpleFighter[] | Fighter[],
  ) {
    super(player1);
  }

  fight(): number {
    this.monstersOrPlayer.forEach((monster) => {
      for (
        let index = 0;
        this.player1.lifePoints > 0 && monster.lifePoints > 0;
        index += 1
      ) {
        this.player1.attack(monster);
        monster.attack(this.player1);
      }
    });

    return super.fight();
  }
}

export default PVE;
