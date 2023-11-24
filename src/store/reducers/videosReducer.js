let initialState = {
  videos: [],
  isLoading: false,
  error: null,
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS_SUCCESS":
      return {
        ...state,
        videos: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_VIDEOS_FAILURE":
      return {
        ...state,
        videos: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default videosReducer;
