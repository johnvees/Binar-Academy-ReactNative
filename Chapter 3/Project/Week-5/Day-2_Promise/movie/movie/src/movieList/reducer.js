const initialState = {
  now_playing: [],
  popular: [],
  top_rated: [],
  detailMovie: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        now_playing: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
