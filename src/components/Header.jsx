import { Link, NavLink, Form, Outlet } from "react-router-dom";
import appLogo from "../assets/logo.png";
import Movies from "../pages/RootPage";
import { useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";
export default function MainHeader() {
  const { pathname } = useLocation();
  const isTvseries = pathname.startsWith("/tvseries") ? true : false;
  const isMovie = pathname.startsWith("/movie") ? true : false;
  return (
    <header className="main-header">
      <header className="header">
        <Link className="app-logo">
          <div className="logo-text">what2</div>
          <div>
            <img src={appLogo} alt="logo-icon" className="logo-image" />
          </div>
        </Link>
      </header>
      <nav className="show-selection">
        <NavLink to="/" className={isMovie ? "active-button" : "button"}>
          Movies
        </NavLink>
        <NavLink
          to="tvseries"
          className={isTvseries ? "active-button" : "button"}
        >
          Tv series
        </NavLink>
      </nav>
      <SearchForm />
    </header>
  );
}
