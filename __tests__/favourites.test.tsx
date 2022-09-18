import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import FavouriteGames from 'pages/favourites';
import { RecoilRoot } from 'recoil';

it('renders a heading', () => {
  render(
    <MockedProvider>
      <RecoilRoot>
        <FavouriteGames />
      </RecoilRoot>
    </MockedProvider>
  );
  const heading = screen.getByRole('heading', {
    name: /Favourites/,
  });

  expect(heading).toBeInTheDocument();
});
