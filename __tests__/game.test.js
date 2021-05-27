import { l, length, get } from '@hexlet/pairs-data';
import simpleCard from '../src/cardTypes/simpleCard.js';
import percentCard from '../src/cardTypes/percentCard.js';
import make from '../src/game.js';

describe('CardGame', () => {
  it('should work 1', () => {
    const cards = l(simpleCard('Barbaric Lantern', 6));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(4);

    const step3 = get(2, log);
    expect(step3.health1).toBe(4);
    expect(step3.health2).toBe(4);

    const step4 = get(3, log);
    expect(step4.health1).toBe(4);
    expect(step4.health2).toBe(-2);

    const step5 = get(4, log);
    expect(step5.health1).toBe(4);
    expect(step5.health2).toBe(-2);
  });

  it('should work 2', () => {
    const cards = l(simpleCard('Haunted Beads', 5));
    const game = make(cards);
    const log = game('Mike', 'Alan');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(5);

    const step3 = get(2, log);
    expect(step3.health1).toBe(5);
    expect(step3.health2).toBe(5);

    const step4 = get(3, log);
    expect(step4.health1).toBe(5);
    expect(step4.health2).toBe(0);

    const step5 = get(4, log);
    expect(step5.health1).toBe(5);
    expect(step5.health2).toBe(0);
  });
});

describe('CardGame 2', () => {
  const cards = l(
    simpleCard('Ruby Infused Vessel', 7),
    percentCard('Deathsong, Crystal of Echoes', 80),
  );

  test('CardGame', () => {
    let cardIndex = 1;
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(3);

    const step3 = get(2, log);
    expect(step3.health1).toBe(2);
    expect(step3.health2).toBe(3);

    const step4 = get(3, log);
    expect(step4.health1).toBe(2);
    expect(step4.health2).toBe(-4);

    const step5 = get(4, log);
    expect(step5.health1).toBe(2);
    expect(step5.health2).toBe(-4);
  });

  test('default', () => {
    const game = make(cards);
    const log = game('John', 'Ada');
    expect(log).not.toBeUndefined();
  });
});

describe('CardGame 3', () => {
  it('#flow 1', () => {
    const cards = l(simpleCard('Moonbeam', 6));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(4);

    const step3 = get(2, log);
    expect(step3.health1).toBe(4);
    expect(step3.health2).toBe(4);

    const step4 = get(3, log);
    expect(step4.health1).toBe(4);
    expect(step4.health2).toBe(-2);

    const step5 = get(4, log);
    expect(step5.health1).toBe(4);
    expect(step5.health2).toBe(-2);
  });

  it('#flow 2', () => {
    let cardIndex = 1;
    const cards = l(
      simpleCard('Ruby Infused Vessel', 7),
      percentCard('Deathsong, Crystal of Echoes', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(3);

    const step3 = get(2, log);
    expect(step3.health1).toBe(2);
    expect(step3.health2).toBe(3);

    const step4 = get(3, log);
    expect(step4.health1).toBe(2);
    expect(step4.health2).toBe(-4);

    const step5 = get(4, log);
    expect(step5.health1).toBe(2);
    expect(step5.health2).toBe(-4);
  });
});

describe('CardGame 4', () => {
  it('#flow 1', () => {
    const cards = l(simpleCard('Shadow Strike', 6));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(4);
    expect(step2.message).toBe('Player John used Shadow Strike against Ada and caused 6 damage');

    const step3 = get(2, log);
    expect(step3.health1).toBe(4);
    expect(step3.health2).toBe(4);

    const step4 = get(3, log);
    expect(step4.health1).toBe(4);
    expect(step4.health2).toBe(-2);

    const step5 = get(4, log);
    expect(step5.health1).toBe(4);
    expect(step5.health2).toBe(-2);
  });

  it('#flow 2', () => {
    let cardIndex = 2;
    const cards = l(
      simpleCard('Enchanted Stone', 7),
      percentCard('Whispersong, Scroll of Twisted Visions', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(3);

    const step3 = get(2, log);
    expect(step3.health1).toBe(2);
    expect(step3.health2).toBe(3);
    expect(step3.message).toBe('Player Ada used Whispersong, Scroll of Twisted Visions against John and caused 8 damage');

    const step4 = get(3, log);
    expect(step4.health1).toBe(2);
    expect(step4.health2).toBe(-4);

    const step5 = get(4, log);
    expect(step5.health1).toBe(2);
    expect(step5.health2).toBe(-4);
  });
});

describe('CardGame 5', () => {
  it('#flow 1', () => {
    const cards = l(simpleCard('Barbaric Lantern', 5));
    const game = make(cards);
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(5);

    const step3 = get(2, log);
    expect(step3.health1).toBe(5);
    expect(step3.health2).toBe(5);

    const step4 = get(3, log);
    expect(step4.health1).toBe(5);
    expect(step4.health2).toBe(0);

    const step5 = get(4, log);
    expect(step5.health1).toBe(5);
    expect(step5.health2).toBe(0);
  });

  it('#flow 2', () => {
    let cardIndex = 2;
    const cards = l(
      simpleCard('Enchanted Stone', 7),
      percentCard('Whispersong, Scroll of Twisted Visions', 80),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(5);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(3);

    const step3 = get(2, log);
    expect(step3.health1).toBe(2);
    expect(step3.health2).toBe(3);

    const step4 = get(3, log);
    expect(step4.health1).toBe(2);
    expect(step4.health2).toBe(-4);

    const step5 = get(4, log);
    expect(step5.health1).toBe(2);
    expect(step5.health2).toBe(-4);
  });

  it('#flow 3 (health order in log)', () => {
    let cardIndex = 2;
    const cards = l(
      simpleCard('Enchanted Stone', 3),
      simpleCard('Whispersong, Scroll of Twisted Visions', 10),
    );
    const game = make(cards, (c) => {
      cardIndex = cardIndex === 0 ? 1 : 0;
      return get(cardIndex, c);
    });
    const log = game('John', 'Ada');

    expect(length(log)).toBe(4);

    const step1 = get(0, log);
    expect(step1.health1).toBe(10);
    expect(step1.health2).toBe(10);

    const step2 = get(1, log);
    expect(step2.health1).toBe(10);
    expect(step2.health2).toBe(7);

    const step3 = get(2, log);
    expect(step3.health1).toBe(0);
    expect(step3.health2).toBe(7);

    const step4 = get(3, log);
    expect(step4.health1).toBe(0);
    expect(step4.health2).toBe(7);
  });
});
