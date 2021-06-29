
import Character from '../Character';

test('создание классa', () => {
  const received = new Character('Petr', 'Zombie');

  expect(received).toEqual({
    name: 'Petr', type: 'Zombie', health: 100, level: 1,
  });
});

test('Выброс ошибки в случае typeof this.name !== string', () => {
  expect(() => {
    Character(123, 'Bowman');
  }).toThrow();
});


test('Выброс ошибки в случае this.name.length < 2', () => {
  expect(() => {
    Character('O', 'Bowman');
  }).toThrow();
});


test('Выброс ошибки в случае this.name.length > 10', () => {
  expect(() => {
    Character('OUHJNNNJJJJRTCFF156238975', 'Bowman');
  }).toThrow();
});

test('Выброс ошибки в случае отличном от this.type', () => {
  expect(() => {
    Character('Dima', 'Man');
  }).toThrow();
});
