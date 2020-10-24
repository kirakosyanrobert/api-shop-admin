import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { theme } from './theme';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'react-spring-modal/dist/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'components/Scrollbar/scrollbar.css';
import './theme/global.css';
import DemoSwitcher from 'components/DemoSwitcher/SwitcherBtn';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

function App() {
  const engine = new Styletron();

  return (
    <ApolloProvider client={client as any}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <DemoSwitcher />
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
