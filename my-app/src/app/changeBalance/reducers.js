import * as actionType from './types';

const changeBalanceReducer = (state = {}, action) => {
  let newState = state;

  switch(action.type) {
    case actionType.SET_BALANCE_CHANGE:
      newState.amount = action.value;
      newState.description = action.description;

      return {...newState};

    default:
      return state;
  }
};

export default changeBalanceReducer;