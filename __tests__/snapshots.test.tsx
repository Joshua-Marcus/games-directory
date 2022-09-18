import { render } from '@testing-library/react';
import Home from '../pages/index';
import { MockedProvider } from '@apollo/client/testing';
import { RecoilRoot } from 'recoil';
import FavouriteGames from 'pages/favourites';

describe('Snapshot Tests', () => {
  test('Home Page', () => {
    const { container } = render(
      <MockedProvider>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('Favourites Page', () => {
    const { container } = render(
      <MockedProvider>
        <RecoilRoot>
          <FavouriteGames />
        </RecoilRoot>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
