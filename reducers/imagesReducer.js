import {ACTION} from '../constants';

const initialState = {
  imagesUri: [],
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_IMAGES:
      return {
        ...state,
        imagesUri: [...state.imagesUri, ...action.images],
      };
    default:
      return state;
  }
};

export default imagesReducer;
