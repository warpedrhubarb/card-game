import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const prevLog = head(log);
      const newLog = {
        message: `${name1} has been killed`,
        health1: prevLog.health1,
        health2: prevLog.health2,
      };

      return consList(newLog, log);
    }

    const card = customRandom(cards);

    const cardName = card.name;
    const points = card.damage(health2);

    const newHealth = health2 - points;
    const message = `Player ${name1} used ${cardName} against ${name2} and caused ${points} damage`;

    const stats = { message };

    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }

    const newLog = consList(stats, log);

    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Start the battle',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

const make = (cards, customRandom = random) => (
  (player1, player2) => run(player1, player2, cards, customRandom)
);

export default make;
