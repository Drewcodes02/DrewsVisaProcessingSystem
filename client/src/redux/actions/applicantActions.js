import * as types from './actionTypes';

export const createProfile = (applicantData) => {
  return {
    type: types.CREATE_PROFILE,
    payload: applicantData,
  };
};
// ...other actions
