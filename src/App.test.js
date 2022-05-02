import { render } from '@testing-library/react';
import App from './App';

test('renders chucks face', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('figure')).toBeInTheDocument();
});
