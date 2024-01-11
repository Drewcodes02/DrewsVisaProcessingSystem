import * as types from '../actions/actionTypes';

const initialState = {
  profile: null,
  // ...other state elements
};

export const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    // ...other cases
    default:
      return state;
  }
};
