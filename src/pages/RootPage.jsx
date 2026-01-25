import { NavLink, Outlet } from "react-router-dom";
import MainHeader from "../components/Header";
import { useLocation } from "react-router-dom";

export default function RootPage() {
  const { pathname } = useLocation();
  const isTvseries = pathname.startsWith("/tvseries");
  return (
    <main>
      <MainHeader />
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
      <section>
        <Outlet />
      </section>
    </main>
  );
}
