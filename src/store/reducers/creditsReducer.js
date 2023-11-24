let initialState = {
  credits: [],
  isLoading: false,
  error: null,
  selectedCredits: {},
};

const creditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CREDITS_SUCCESS":
      return {
        ...state,
        credits: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_CREDITS_FAILURE":
      return {
        ...state,
        credits: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default creditsReducer;
