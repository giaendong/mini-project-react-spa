import 'babel-polyfill';
import 'isomorphic-fetch';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer, hot } from 'react-hot-loader';
// import { routeCodes } from 'constants/routes';
// import Menu from 'components/global/Menu';
// import Home from 'views/Home';
import Data from 'views/Data';
// import NotFound from 'views/NotFound';
import configureStore from 'config/store';

import '../../css/index.css';

const store = configureStore().store;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={ store }>
          <BrowserRouter>
            <div style={ { paddingTop: '10vh', paddingLeft: '10vw' } }>
              <div className='App'>
                {/* <Menu /> */}

                <div className='Page'>
                  <Data />
                  {/* <Switch>
                    <Route exact path={ routeCodes.HOME } component={ Home } />
                    <Route path={ routeCodes.PEOPLE } component={ People } />
                    <Route path='*' component={ NotFound } />
                  </Switch> */}
                </div>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </AppContainer>
    );
  }
}

export default hot(module)(App);
