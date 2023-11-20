export const fetchMovies = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/movies/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MOVIES_FAILURE", error: error.message });
      });
  };
};
export const fetchOneMovies = (i) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/movies/${i}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch({ type: "FETCH_ONE_MOVIE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error });
  }
};
