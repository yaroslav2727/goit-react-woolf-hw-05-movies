import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

import Navigation from "components/Navigation/Navigation";

import "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage.jsx"));
const MovieCasts = lazy(() => import("../MovieCasts/MovieCasts.jsx"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews.jsx"));

function App() {
  return (
    <>
      <Navigation />
      <Toaster position="top-right" reverseOrder={false} />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCasts />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
