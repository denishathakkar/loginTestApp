import {createStore, combineReducers, applyMiddleware} from 'redux';
import LoginReducer from '../src/reducers/loginReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(...[thunk]);
const rootReducer = combineReducers({loginData: LoginReducer});
const configureStore = () => {
  return createStore(rootReducer, middleware);
};
export default configureStore;
