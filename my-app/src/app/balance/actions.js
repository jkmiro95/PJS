import * as actionType from './types';

export const setBalance = (value) => ({
  type: actionType.SET_BALANCE,
  value: value
});