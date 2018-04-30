import { combineReducers } from 'redux';
import balanceReducer from './balance/reducers';
import changeBalanceReducer from './changeBalance/reducers';

const appReducer = combineReducers({
  balance: balanceReducer,
  balanceChange: changeBalanceReducer
});

export default appReducer;