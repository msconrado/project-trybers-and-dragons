import Character from './Character';

const player1 = new Character('Goku');

const player2 = new Character('Vegeta');

const player3 = new Character('Piccolo');

for (let index = 0; index < 10; index += 1) {
  player1.levelUp();
}

export { player1, player2, player3 };
