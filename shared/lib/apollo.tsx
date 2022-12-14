import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SUPABASE_URL + '/graphql/v1',
  cache: new InMemoryCache(),
  headers: {
    apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  },
});

export default client;
