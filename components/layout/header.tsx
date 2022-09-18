import { HeartIcon } from '@heroicons/react/24/outline';
import { useRecoilValue } from 'recoil';
import { favouritesState } from '@shared/state';
import Link from 'next/link';

//Code Snippit take from https://tailwindui.com/components/ecommerce/page-examples/storefront-pages
// modified to suit

export const Header = () => {
  const favouriteGames = useRecoilValue(favouritesState);
  return (
    <header className='bg-white border-b border-gray-300'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex w-full items-center justify-between py-6'>
          <div className='flex items-center'>
            <Link href='/'>
              <h3 className='font-semibold text-blue-500 text-2xl cursor-pointer'>
                GamesApp
              </h3>
            </Link>
          </div>
          <div className='ml-4 flow-root lg:ml-8'>
            <Link href='/favourites'>
              <a className='group -m-2 flex items-center p-2'>
                <HeartIcon className='h-6 w-6 flex-shrink-0 text-gray-500' />
                <span className='ml-2 text-sm font-medium text-gray-500'>
                  {favouriteGames?.length}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
