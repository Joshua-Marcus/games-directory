import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@shared/lib/apollo';
import { Header } from '@components';
import { RecoilRoot } from 'recoil';
import '@styles/theme.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default App;
