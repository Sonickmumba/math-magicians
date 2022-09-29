import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Quote from '../pages/Quote';

test('Test for Quote Component', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/Mathematics is not about numbers/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Test for Quote component', () => {
  it('Quote Component renders correctly', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
