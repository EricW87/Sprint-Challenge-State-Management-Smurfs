import { FETCH_DATA, POST_DATA, PUT_DATA, DELETE_DATA, UPDATE_SMURFS, SET_ERROR } from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  isPuttingData: false,
  isDeletingData: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
        return {
            ...state,
            isFetchingData: true,
            smurfs: []
        };
    case POST_DATA:
        return {
            ...state,
            isPostingData: true,
    };
    case PUT_DATA:
        return {
          ...state,
          isPuttingData: true,
    };
    case DELETE_DATA:
        return {
          ...state,
          isDeletingData: true,
    };

    case UPDATE_SMURFS:
        return {
            ...state,
            smurfs: action.payload,
            isFetchingData: false,
            isPostingData: false
        };
    case SET_ERROR:
    return {
        ...state,
        isFetchingData: false,
        error: action.payload
    };
    default:
        return state;
    }
};