import { render, screen } from '@testing-library/react';
import App from '../App';

it('testing title', () => {
  render(<App />);
  const text = screen.getByText('Maths Magician');
  const li = screen.getAllByRole('linktest')
  expect(li.length).toBe(3)
  expect(text).toMatchSnapshot();
});
