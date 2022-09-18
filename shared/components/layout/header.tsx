import { ShoppingBagIcon } from '@heroicons/react/24/outline';

//Code Snippit take from https://tailwindui.com/components/ecommerce/page-examples/storefront-pages
// modified to suit

export const Header = () => {
  return (
    <header className='bg-white border-b border-gray-300'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <h3 className='font-semibold text-indigo-600 text-xl'>games.app</h3>
          </div>
          <div className='ml-4 flow-root lg:ml-8'>
            <a href='#' className='group -m-2 flex items-center p-2'>
              <ShoppingBagIcon
                className='h-6 w-6 flex-shrink-0 text-gray-500'
                aria-hidden='true'
              />
              <span className='ml-2 text-sm font-medium text-gray-500'>0</span>
              <span className='sr-only'>items in cart, view bag</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
