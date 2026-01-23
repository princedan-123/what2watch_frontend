import { NavLink, Outlet } from "react-router-dom";
import MainHeader from "../components/Header";
import { useLocation } from "react-router-dom";

export default function RootPage() {
  const { pathname } = useLocation();
  const isTvseries = pathname.startsWith("/tvseries") ? true : false;
  return (
    <main>
      <MainHeader />
      <section className="categories">
        <NavLink
          to={
            isTvseries ? "/tvseries/trending-series" : "movies/trending-movies"
          }
          className="button"
        >
          Trending
        </NavLink>
        <NavLink to="movies/popular-movies" className="button">
          Popular
        </NavLink>
        <NavLink to="movies/upcoming-movies" className="button">
          Upcoming
        </NavLink>
        <NavLink to="movies/now-playing" className="button">
          Now Playing
        </NavLink>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
