import '@testing-library/jest-dom';
import calculate from '../components/calculate';

describe('calculate(obj, number)', () => {
  it('test numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '3')).toEqual({ next: '3', total: null });
    expect(calculate({ total: '3', next: null, operation: '+' }, '3')).toEqual({ total: '3', next: '3', operation: '+' });
  });

  it('test operatios', () => {
    expect(calculate({ total: null, next: '34', operation: null }, '+')).toEqual({ total: '34', next: null, operation: '+' });
    expect(calculate({ total: '9', next: '9', operation: '+' }, '-')).toEqual({ total: '18', next: null, operation: '-' });
  });
});
