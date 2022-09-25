import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(0.00)).toBe('0 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1040)).toBe('1.02 KB')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(123829398299)).toBe('115.33 GB')
});
