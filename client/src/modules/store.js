import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

export default createStoreWithMiddleware;
