let initialState = {
  movies: [],
  isLoading: false,
  error: null,
  selectedMovie: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        movies: [],
        isLoading: false,
        error: action.payload,
      };
    case "FETCH_ONE_MOVIE_SUCCESS":
      return {
        ...state,
        selectedMovie: action.payload,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
