
import Bowman from '../Bowman';

test('создание классa', () => {
  const received = new Bowman('Petr', 'Bowman');

  expect(received).toEqual({
    name: 'Petr', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});


// test('Выброс ошибки в случае typeof this.name !== string', () => {
//    expect(() => {
//       new Character(123, 'Bowman');
//    }).toThrowError(new Error('Некорректные значения!'));
// });


// test('Выброс ошибки в случае this.name.length < 2', () => {
//    expect(() => {
//       new Character('O', 'Bowman');
//    }).toThrowError(new Error('Некорректные значения!'));
// });


// test('Выброс ошибки в случае this.name.length > 10', () => {
//    expect(() => {
//       new Character('OUHJNNNJJJJRTCFF156238975', 'Bowman');
//    }).toThrowError(new Error('Некорректные значения!'));
// });

// test('Выброс ошибки в случае отличном от this.type', () => {
//    expect(() => {
//       new Character('Dima', 'Man');
//    }).toThrowError(new Error('Некорректные значения!'));
// });
