import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    public player1: Character | Fighter,
    public player2: Character | Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    this.player1.attack(this.player2);

    this.player2.attack(this.player1);

    return super.fight();
  }
}

export default PVP;
