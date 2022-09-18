import { render } from '@testing-library/react';
import Home from '../pages/index';
import { MockedProvider } from '@apollo/client/testing';

it('renders homepage unchanged', () => {
  const { container } = render(
    <MockedProvider>
      <Home />
    </MockedProvider>
  );
  expect(container).toMatchSnapshot();
});
