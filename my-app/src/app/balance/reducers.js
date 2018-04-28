import * as actionType from './types';

const balanceReducer = (state = {}, action) => {
  let newState = state;

  switch(action.type) {
    case actionType.SET_BALANCE:
      newState.current = action.value;
      newState.currentSet = true;

      return {...newState};

    default:
      return state;
  }
};

export default balanceReducer;