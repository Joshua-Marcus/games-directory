import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { favouritesState } from '@shared/state';
import { GameItem } from '@components';

const FavouriteGames: NextPage = () => {
  const [favouriteGames] = useRecoilState(favouritesState);
  return (
    <div className='mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Favourites
      </h1>
      <div className='mt-8'>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8'>
          {favouriteGames.map((favouriteGame) => (
            <GameItem key={favouriteGame.id} inputGame={favouriteGame} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteGames;
