import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MoviesList from "./MoviesList";
import thunk from "redux-thunk";
import "@testing-library/jest-dom/extend-expect";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("MoviesList Component", () => {
  it("should render correctly with props", () => {
    const initialState = {
      default: {
        selectedMovie: null,
        movies: [
          {
            id: 1,
            title: "Movie 1",
            popularity: "2022",
            posterUrl: "https://example.com/movie1.jpg",
            genre: "Action",
          },
          {
            id: 2,
            title: "Movie 2",
            popularity: "2021",
            posterUrl: "https://example.com/movie2.jpg",
            genre: "Adventure",
          },
        ],
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });

  it("should trigger fetchOneMovies when a movie is clicked", () => {
    const initialState = {
      default: {
        selectedMovie: null,
        movies: [
          {
            id: 1,
            title: "Movie 1",
            popularity: "2022",
            posterUrl: "https://example.com/movie1.jpg",
            genre: "Action",
          },
          {
            id: 2,
            title: "Movie 2",
            popularity: "2021",
            posterUrl: "https://example.com/movie2.jpg",
            genre: "Adventure",
          },
        ],
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    fireEvent.click(screen.getByText("Movie 1"));

    expect(store.getState().default.movies[0]).toEqual({
      id: 1,
      title: "Movie 1",
      popularity: "2022",
      posterUrl: "https://example.com/movie1.jpg",
      genre: "Action",
    });
  });
});
