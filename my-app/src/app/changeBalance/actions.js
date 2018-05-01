import * as actionType from './types';

export const setBalanceChange = (value, description, key) => ({
  type: actionType.SET_BALANCE_CHANGE,
  value: value,
  description: description,
  key: key
});

export const deleteBalanceChange = (key) => ({
  type: actionType.DELETE_BALANCE_CHANGE,
  key: key
});