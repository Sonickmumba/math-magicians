import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Home from '../pages/Home';

test('Test for Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome To Our Page/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Test for  Home component', () => {
  it('Home Component renders correctly', () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
