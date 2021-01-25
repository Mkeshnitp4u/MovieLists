import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './Redux/reducers';
import AppNavigation from './Navigation/App';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './Redux/sagas';

const sagaMiddleware = creatSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
export default App;
