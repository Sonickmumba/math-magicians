import operate from '../logic/operate';

test('Addition', () => {
  expect(operate(4, 5, '+')).toBe('9');
});
test('Subtraction', () => {
  expect(operate(18, 8, '-')).toBe('10');
});
test('Multipication', () => {
  expect(operate(10, 8, 'x')).toBe('80');
});
test('Division', () => {
  expect(operate(10, 5, '÷')).toBe('2');
});
