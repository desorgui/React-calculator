import '@testing-library/jest-dom';
import operate from '../components/operate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('should add numbers', () => {
    expect(operate('3', '9', '+')).toBe('12');
    expect(operate('7', '2', '-')).toBe('5');
    expect(operate('9', '2', 'x')).toBe('18');
    expect(operate('5', '2', '÷')).toBe('2.5');
  });
});
