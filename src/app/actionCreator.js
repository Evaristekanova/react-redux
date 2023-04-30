import * as actionTypes from './actionTypes';

export const bugAdded = (description) => {
  return {
    type: actionTypes.BUG_ADDED,
    payload: {
      description,
    },
  };
};
export const bugRemoved = (id) => {
  return {
    type: actionTypes.BUG_REMOVED,
    payload: {
      id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: actionTypes.BUG_RESOLVED,
    payload: {
      id,
    },
  };
};
