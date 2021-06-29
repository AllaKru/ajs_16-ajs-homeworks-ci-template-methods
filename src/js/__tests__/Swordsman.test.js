import Swordsman from '../Swordsman';

test('создание классa', () => {
  const received = new Swordsman('Petr', 'Swordsman');

  expect(received).toEqual({
    name: 'Petr', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
