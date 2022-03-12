import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private player1: Fighter,
    private player2: Fighter,
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
