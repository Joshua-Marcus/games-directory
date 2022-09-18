// components/Countries.js

import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query GetAllGames {
    gamesCollection {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data.gamesCollection.edges.map((x: any) => x.node);

  return (
    <div>
      {countries.map((country: any) => (
        <div key={country.id}>
          {country.id} - {country.name}
          <p></p>
        </div>
      ))}
    </div>
  );
}
