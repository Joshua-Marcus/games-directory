import { useQuery, gql } from '@apollo/client';
import { Loader } from 'components';
import { GameItem } from './item';

const GAMES_QUERY = gql`
  query GetAllGames {
    gamesCollection {
      edges {
        node {
          id
          name
          rating
          release_date
          image_url
        }
      }
    }
  }
`;

export const GamesGrid = () => {
  const { data, loading, error } = useQuery(GAMES_QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const games = data.gamesCollection.edges.map((x: any) => x.node);

  return (
    <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8'>
      {games.map((game: any) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};
