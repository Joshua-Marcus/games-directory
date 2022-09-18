import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../shared/lib/apollo';
import '@styles/theme.scss';
import { Header } from '@shared/components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
