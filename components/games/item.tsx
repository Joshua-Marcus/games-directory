import { HeartIcon } from '@heroicons/react/24/outline';
import { useRecoilState } from 'recoil';
import { favouritesState } from 'shared/state';
import { Game } from '@shared/types';

export const GameItem = ({ inputGame }: { inputGame: Game }) => {
  const [favouriteGames, setFavouriteGame] = useRecoilState(favouritesState);

  const currentGameIndex = favouriteGames.findIndex(
    (favouriteGame) => favouriteGame.id === inputGame.id
  );

  const toggleFavouriteGame = () => {
    setFavouriteGame((oldTodoList: Game[]) => {
      if (
        favouriteGames.some(
          (favouriteGame: Game) => favouriteGame.id === inputGame.id
        )
      ) {
        const removeGame = removeItemAtIndex<Game>(
          favouriteGames,
          currentGameIndex
        );
        return removeGame;
      } else {
        return [...oldTodoList, inputGame];
      }
    });
  };

  return (
    <div className='group flex flex-col overflow-hidden rounded-lg border border-gray-200 cursor-pointer'>
      <div className='bg-gray-200 group-hover:opacity-75 sm:h-80'>
        <img
          src={inputGame.image_url}
          alt={inputGame.image_url}
          className='h-full w-full object-cover object-center sm:h-full sm:w-full'
        />
      </div>
      <div className='flex flex-1 flex-col space-y-1 p-2.5'>
        <div className='flex flex-row justify-between'>
          <h3 className='text-sm font-medium text-gray-900'>
            <p>{inputGame.name}</p>
          </h3>
          {favouriteGames.some(
            (favouriteGames) => favouriteGames.id === inputGame.id
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

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
