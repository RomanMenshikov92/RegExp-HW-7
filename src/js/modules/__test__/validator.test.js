import Validator from '../validator';

/*
  Тесты для первой задачи: Никнейм
*/
test.each([
  ['letters', 'Roman', true],
  ['letters, "_" and "-"', 'Ro-Man_lala', true],
  ['letters, "_", "-" and 2 number', 'Roman-92_Menshikov', true],
  ['letters, "_" and 3 number', 'RomanMenshikov92_2pac', true],
])('Validator true "letters, "_", "-" and number"', (level, name, expected) => {
  const result = Validator.validateUsername(name);
  expect(result).toBe(expected);
});

test.each([
  ['beginning number', '92Roman', false],
  ['final number', 'Roman1992', false],
  ['beginning "_"', '_Roman', false],
  ['final "_"', 'Roman_', false],
  ['more 3 number', 'Ro0000man', false],
  ['NULL values', '', false],
])('Validator false', (level, name, expected) => {
  const result = Validator.validateUsername(name);
  expect(result).toBe(expected);
});

/*
  Тесты для второй задачи: Телефон
*/
test.each([
  ['Russian 8', '8 (927) 000-00-00', '+79270000000'],
  ['Russian 7', '+7 960 000 00 00', '+79600000000'],
  ['Other numbers', '+86 000 000 0000', '+860000000000'],
  ['Empty value', '', ''],
])('validatePhoneNumber', (level, tel, expected) => {
  const result = Validator.validatePhoneNumber(tel);
  expect(result).toBe(expected);
});
