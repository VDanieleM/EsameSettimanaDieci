export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const toggleFavorite = (track) => ({
  type: TOGGLE_FAVORITE,
  payload: track,
});
