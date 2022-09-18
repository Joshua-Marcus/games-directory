import { HeartIcon } from '@heroicons/react/24/outline';
import { useRecoilState } from 'recoil';
import { favouritesState } from 'state/favourites.state';
import { removeItemAtIndex } from 'utils/removeFromArray';

export const GameItem = ({ game }: any) => {
  const [favouriteGames, setFavouriteGame] = useRecoilState(favouritesState);

  const currentGameIndex = favouriteGames.findIndex(
    (favouriteGame) => favouriteGame.id === game.id
  );
  const toggleFavouriteGame: any = () => {
    setFavouriteGame((oldTodoList: any) => {
      if (favouriteGames.some((games: any) => games.id === game.id)) {
        const updatedRemovedList = removeItemAtIndex(
          favouriteGames,
          currentGameIndex
        );
        return updatedRemovedList;
      } else {
        return [
          ...oldTodoList,
          {
            id: game.id,
            name: game.name,
            image_url: game.image_url,
          },
        ];
      }
    });
  };

  return (
    <div
      key={game.id}
      className='group flex flex-col overflow-hidden rounded-lg border border-gray-200 cursor-pointer'
    >
      <div className='bg-gray-200 group-hover:opacity-75 sm:h-80'>
        <img
          src={game.image_url}
          alt={game.image_url}
          className='h-full w-full object-cover object-center sm:h-full sm:w-full'
        />
      </div>
      <div className='flex flex-1 flex-col space-y-1 p-2.5'>
        <div className='flex flex-row justify-between'>
          <h3 className='text-sm font-medium text-gray-900'>
            <p>{game.name}</p>
          </h3>
          {favouriteGames.some(
            (favouriteGames) => favouriteGames.id === game.id
          ) ? (
            <HeartIcon
              onClick={toggleFavouriteGame}
              className='h-6 w-6 flex-shrink-0 text-red-500 fill-red-500'
            />
          ) : (
            <HeartIcon
              onClick={toggleFavouriteGame}
              className='h-6 w-6 flex-shrink-0 text-gray-500'
            />
          )}
        </div>
      </div>
    </div>
  );
};
