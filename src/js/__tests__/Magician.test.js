import Magician from '../Magician';

test('создание классa', () => {
  const received = new Magician('Petr', 'Magician');

  expect(received).toEqual({
    name: 'Petr', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
