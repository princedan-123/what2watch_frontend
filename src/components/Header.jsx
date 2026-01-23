import { NavLink, Form, Outlet } from "react-router-dom";
import appLogo from "../assets/logo.png";
import Movies from "../pages/RootPage";
import Tvseries from "../pages/Tvseries";
import { useLocation } from "react-router-dom";
export default function MainHeader() {
  const { pathname } = useLocation();
  const isTvseries = pathname.startsWith("/tvseries") ? true : false;
  const isMovie = pathname.startsWith("/movie") ? true : false;
  return (
    <>
      <header className="header">
        <img src={appLogo} className="app-logo" />
        <nav>
          <button className="sign-up-button">Sign Up</button>
        </nav>
      </header>
      <nav className="show-selection">
        <NavLink to="/" className={isMovie ? "button active-button" : "button"}>
          Movies
        </NavLink>
        <NavLink
          to="tvseries"
          className={isTvseries ? "button active-button" : "button"}
        >
          Tv series
        </NavLink>
      </nav>
      <section>
        <Form className="form">
          <input type="text" placeholder="🔍" className="search-form" />
          <button type="submit" className="button">
            Search
          </button>
        </Form>
      </section>
    </>
  );
}
