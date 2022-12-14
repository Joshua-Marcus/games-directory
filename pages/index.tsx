import type { NextPage } from 'next';
import { GamesGrid } from '@components';

const Home: NextPage = () => {
  return (
    <div className='mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
      <GamesGrid />
    </div>
  );
};

export default Home;
