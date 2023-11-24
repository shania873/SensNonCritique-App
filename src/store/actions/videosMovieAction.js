export const fetchVideosMovies = (i) => {
  // https://api.themoviedb.org/3/movie/550?api_key=9363895cf925057b041bf503bb589e07
  // `https://api.themoviedb.org/3/discover/movie?api_key=9363895cf925057b041bf503bb589e07`
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
        console.log(data);
        dispatch({ type: "FETCH_VIDEOS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_VIDEOS_FAILURE", error: error.message });
      });
  };
};
