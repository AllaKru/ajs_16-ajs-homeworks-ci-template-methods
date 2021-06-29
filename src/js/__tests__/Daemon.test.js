import Daemon from '../Daemon';

test('создание классa', () => {
  const received = new Daemon('Petr', 'Daemon');

  expect(received).toEqual({
    name: 'Petr', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
