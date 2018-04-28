import { combineReducers } from 'redux';
import balanceReducer from './balance/reducers';

const appReducer = combineReducers({
  balance: balanceReducer
});

export default appReducer;