import { TOGGLE_FAVORITE } from "../actions/actions";

const initialState = {
  favorites: [],
};

function favorites(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.find(
          (track) => track.id === action.payload.id
        )
          ? state.favorites.filter((track) => track.id !== action.payload.id)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
}

export default favorites;
