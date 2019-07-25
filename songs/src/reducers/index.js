import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Some song 1", duration: "4:15" },
    { title: "Some song 2", duration: "2:15" },
    { title: "Some song 3", duration: "3:15" },
    { title: "Some song 4", duration: "4:15" },
    { title: "Some song 5", duration: "5:15" },
    { title: "Some song 6", duration: "1:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
