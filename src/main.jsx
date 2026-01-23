import NowPlaying from "./pages/NowPlaying";
import UpcomingMovies from "./pages/UpcomingMovies";
import { createRoot } from "react-dom/client";
import TrendingTvseries from "./pages/TrendingTvseries";
import TrendingMovies from "./pages/TrendingMovies";
import { Navigate } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import MediaDetails from "./pages/MediaDetails";
import RootPage from "./pages/RootPage";

const routeData = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootPage />}>
        <Route
          index
          element={<Navigate to="movies/trending-movies" replace />}
        />
        <Route path="movies/trending-movies" element={<TrendingMovies />} />
        <Route path="movies/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="movies/popular-movies" element={<PopularMovies />} />
        <Route path="movies/now-playing" element={<NowPlaying />} />
        <Route path="movies/movie/:id" element={<MediaDetails />} />
      </Route>
      <Route path="/tvseries" element={<RootPage />}>
        <Route index element={<Navigate to="trending-series" />} />
        <Route path="trending-series" element={<TrendingTvseries />} />
      </Route>
    </>,
  ),
);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routeData} />
  </QueryClientProvider>,
);
