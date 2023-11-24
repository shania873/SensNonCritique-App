export const fetchMovies = () => {
  // https://api.themoviedb.org/3/movie/550?api_key=9363895cf925057b041bf503bb589e07
  // `https://api.themoviedb.org/3/discover/movie?api_key=9363895cf925057b041bf503bb589e07`
  return (dispatch) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzYzODk1Y2Y5MjUwNTdiMDQxYmY1MDNiYjU4OWUwNyIsInN1YiI6IjY1NWZiMjg1MWRiYzg4MDBlM2FmYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s02-6gBC6PHJKw4LoioI90EY7mXDaaT8iHOWICAyyP8",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MOVIES_FAILURE", error: error.message });
      });
  };
};

//'https://api.themoviedb.org/3/movie/${i}?language=fr-FR'
export const fetchOneMovies = (i) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${i}?language=fr-FR&include_video=true`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzYzODk1Y2Y5MjUwNTdiMDQxYmY1MDNiYjU4OWUwNyIsInN1YiI6IjY1NWZiMjg1MWRiYzg4MDBlM2FmYzY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s02-6gBC6PHJKw4LoioI90EY7mXDaaT8iHOWICAyyP8",
        },
      }
    );
    const data = await response.json();
    dispatch({ type: "FETCH_ONE_MOVIE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error });
  }
};
