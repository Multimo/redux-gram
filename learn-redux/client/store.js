import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

//import Root Reducer
import rootReducer from './reducers/index';

// local data
import comments from './data/comments';
import posts from './data/posts';


//create an object for the defult state
const defaultState = {
  posts,
  comments
}

// run redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reloading for reducers
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
