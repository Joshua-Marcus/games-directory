import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { favouritesState } from '@state';

const FavouriteGames: NextPage = () => {
  const favouriteGames = useRecoilValue(favouritesState);

  return (
    <div className='mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
      {JSON.stringify(favouriteGames)}
    </div>
  );
};

export default FavouriteGames;
