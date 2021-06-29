
import Character from '../Character';

test('создание классa', () => {
  expect(new Character('Petr', 'Zombie')).toEqual({
    name: 'Petr', type: 'Zombie', health: 100, level: 1,
  });
});

test('Выброс ошибки в случае typeof this.name !== string', () => {
  expect(() => new Character(123, 'Bowman')).toThrow();
});


test('Выброс ошибки в случае this.name.length < 2', () => {
  expect(() => new Character('O', 'Bowman')).toThrow();
});


test('Выброс ошибки в случае this.name.length > 10', () => {
  expect(() => new Character('OUHJNNNJJJJRTCFF156238975', 'Bowman')).toThrow();
});

test('Выброс ошибки в случае отличном от this.type', () => {
  expect(() => new Character('Dima', 'Man')).toThrow();
});

// test('Выброс ошибки , () => {  expect(() => new Character(123, 'Bow2356man')).
// toThrowError(new Error('Некорректные значения!')); });
