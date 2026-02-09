import NowPlaying from "./pages/NowPlaying";
import UpcomingMovies from "./pages/UpcomingMovies";
import { createRoot } from "react-dom/client";
import PopularTvseries from "./pages/PopularTvseries";
import TrendingMovies from "./pages/TrendingMovies";
import { Navigate, useLocation } from "react-router-dom";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import MovieDetails from "./pages/MovieDetail";
import RootPage from "./pages/RootPage";
import TvshowDetails from "./pages/TvshowDetails";
import UpcomingTvseries from "./pages/UpcomingTvseries";
import SearchPage from "./pages/SearchPage";
const routeData = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootPage />}>
        <Route
          index
          element={<Navigate to="movies/trending-movies" replace />}
        />
        <Route path={"/search"} element={<SearchPage />} />
        <Route path="movies/trending-movies" element={<TrendingMovies />} />
        <Route path="movies/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="movies/popular-movies" element={<PopularMovies />} />
        <Route path="movies/now-playing" element={<NowPlaying />} />
        <Route path="movies/movie/:id" element={<MovieDetails />} />
      </Route>
      <Route path="/tvseries" element={<RootPage />}>
        <Route index element={<Navigate to="popular-series" />} />
        <Route path="popular-series" element={<PopularTvseries />} />
        <Route path="upcoming-series" element={<UpcomingTvseries />} />
        <Route path="tvshow/:id" element={<TvshowDetails />} />
      </Route>
    </>,
  ),
);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routeData}></RouterProvider>
  </QueryClientProvider>,
);
