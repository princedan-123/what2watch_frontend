import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function MediaList(props) {
  const { pathname } = useLocation();
  const isMovie = pathname.startsWith("/movies");
  const posterPath = `https://image.tmdb.org/t/p/w342/${props.posterPath}`;
  const mediaId = props.id;
  return (
    <>
      <NavLink to={isMovie ? `/movies/movie/${mediaId}` : `tvshow/${mediaId}`}>
        <section>
          <section
            className="media-item"
            style={{
              backgroundImage: `url(${posterPath})`,
              width: 342,
              height: 342,
            }}
          ></section>
          <section className="caption">
            <div className="popularity">{Math.round(props.popularity)}</div>
            <div className="title">{props.title}</div>
            <div className="release-date">{props.releaseDate}</div>
          </section>
        </section>
      </NavLink>
    </>
  );
}
