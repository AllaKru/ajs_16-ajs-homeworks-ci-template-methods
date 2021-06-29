import Zombie from '../Zombie';

test('создание классa', () => {
  const received = new Zombie('Petr', 'Zombie');

  expect(received).toEqual({
    name: 'Petr', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
