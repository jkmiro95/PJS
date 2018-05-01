import * as actionType from './types';

const changeBalanceReducer = (state = {}, action) => {
  let newState = state;

  switch(action.type) {
    case actionType.SET_BALANCE_CHANGE:
      newState.changeArray = [...newState.changeArray, { amount: action.value, description: action.description, key: action.key }];

      return {...newState};

    case actionType.DELETE_BALANCE_CHANGE:
       newState.changeArray = newState.changeArray.filter((el) => {
        return el.key !== action.key
      });

      return {...newState};

    default:
      return state;
  }
};

export default changeBalanceReducer;