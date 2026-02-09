import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export const MediaType = createContext();
export default function RootPage() {
  const [mediaSelection, setMediaSelection] = useState("movie");
  const { pathname } = useLocation();
  const isMovie = pathname.startsWith("/movies") ? true : false;
  const isTvseries = pathname.startsWith("/tvseries");
  function handleMovieSelection() {
    setMediaSelection("movie");
  }
  function handleTvseriesSelection() {
    setMediaSelection("tvseries");
  }
  return (
    <main>
      <header className="main-header">
        <header className="header">
          <Link to="/">
            <div className="logo-text">what2Watch</div>
          </Link>
        </header>
        <nav className="show-selection">
          <NavLink
            to="/"
            className={isMovie ? "active-button" : "button"}
            onClick={handleMovieSelection}
          >
            Movies
          </NavLink>
          <NavLink
            to="tvseries"
            className={isTvseries ? "active-button" : "button"}
            onClick={handleTvseriesSelection}
          >
            Tv series
          </NavLink>
        </nav>
        <SearchForm />
      </header>
      <section className="categories">
        <NavLink
          to={
            isTvseries ? "/tvseries/popular-series" : "movies/trending-movies"
          }
          className="button"
        >
          {isTvseries ? false : "Trending"}
        </NavLink>
        <NavLink
          to={isTvseries ? "/tvseries/popular-series" : "movies/popular-movies"}
          className="button"
        >
          Popular
        </NavLink>
        <NavLink
          to={
            isTvseries ? "/tvseries/upcoming-series" : "movies/upcoming-movies"
          }
          className="button"
        >
          Upcoming
        </NavLink>
        <NavLink
          to={isTvseries ? "/tvseries/now-series" : "movies/now-playing"}
          className="button"
        >
          {isTvseries ? false : "Now Playing"}
        </NavLink>
      </section>
      <MediaType.Provider value={mediaSelection}>
        <section>
          <Outlet />
        </section>
      </MediaType.Provider>
    </main>
  );
}
