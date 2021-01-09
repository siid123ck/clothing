import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'; 
import rootReducer from './root';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares)); 
//rootReducer = combineReducers({user:userReducer})

export default store;