import * as actionType from './types';

export const setBalanceChange = (value, description) => ({
  type: actionType.SET_BALANCE_CHANGE,
  value: value,
  description: description
});