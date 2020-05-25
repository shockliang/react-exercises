import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi there!/i);
  expect(linkElement.firstChild.textContent).toContain('Hi there!');
});
