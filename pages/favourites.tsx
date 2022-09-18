import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { favouritesState } from '@shared/state';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Game } from '@shared/types';

const FavouriteGames: NextPage = () => {
  const [favouriteGames] = useRecoilState(favouritesState);

  return (
    <div className='mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Favourites
      </h1>
      <div className='mt-12'>
        <section aria-labelledby='cart-heading'>
          <ul
            role='list'
            className='divide-y divide-gray-200 border-t border-b border-gray-200'
          >
            {favouriteGames.map((product) => (
              <li key={product.id} className='flex py-6 sm:py-10'>
                <div className='flex-shrink-0'>
                  <img
                    src={product.image_url}
                    alt={product.image_url}
                    className='h-48 w-36 rounded-md object-cover object-center'
                  />
                </div>

                <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                  <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div>
                      <div className='flex justify-between'>
                        <h3 className='text-sm'>
                          <p className='font-medium text-gray-700 hover:text-gray-800'>
                            {product.name}
                          </p>
                        </h3>
                      </div>
                      <p className='mt-1 text-sm font-medium text-gray-900'>
                        {product.release_date.toString()}
                      </p>
                    </div>

                    <div className='mt-4 sm:mt-0 sm:pr-9'>
                      <div className='absolute top-0 right-0'>
                        <button
                          type='button'
                          className='-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500'
                        >
                          <span className='sr-only'>Remove</span>
                          <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FavouriteGames;

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
