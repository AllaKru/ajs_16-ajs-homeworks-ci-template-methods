import Undead from '../Undead';

test('создание классa', () => {
  const received = new Undead('Petr', 'Undead');

  expect(received).toEqual({
    name: 'Petr', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
