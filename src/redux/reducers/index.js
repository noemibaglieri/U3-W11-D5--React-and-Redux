const initialState = {
  likedSongs: {
    content: [],
  },

  playingSong: {
    title: "",
    singer: "",
    songImage: null,
    songId: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKED_SONG": {
      let content = [];

      if (state.likedSongs.content.includes(action.payload)) {
        content = state.likedSongs.content.filter((item) => item !== action.payload);
      } else {
        content = [...state.likedSongs.content, action.payload];
      }
      return {
        ...state,

        likedSongs: {
          ...state.likedSongs,
          content,
        },
      };
    }

    case "PLAYING_SONG": {
      console.log("ACTION", action);

      return {
        ...state,

        playingSong: {
          title: action.payload.title,
          singer: action.payload.singer,
          songImage: action.payload.songImage,
          songId: action.payload.songId,
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
