export const fetchVideosMovies = (i) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${i}/videos?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzYzODk1Y2Y5MjUwNTdiMDQxYmY1MDNiYjU4OWUwNyIsInN1YiI6IjY1NWZiMjg1MWRiYzg4MDBlM2FmYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s02-6gBC6PHJKw4LoioI90EY7mXDaaT8iHOWICAyyP8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_VIDEOS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_VIDEOS_FAILURE", error: error.message });
      });
  };
};
