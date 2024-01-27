import { SET_CURRENT_SONG } from "../actions/actions";

const initialState = {
  currentSong: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default songReducer;
