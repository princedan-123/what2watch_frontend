/* Reusable component to display a specific movie/tvshow */
import "../styles/media.css";
import "../styles/index.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Media({ mediaData, trailers }) {
  const { pathname } = useLocation();
  const isTvseries = pathname.startsWith("/tvseries");
  console.log(isTvseries);
  console.log(pathname);
  const [clicked, setClicked] = useState(false);
  const moviePosterPath = `https://image.tmdb.org/t/p/w342${mediaData.poster_path}`;
  function handleInfo() {
    setClicked((prev) => !prev);
  }
  return (
    <section className="media-container">
      <section style={{ width: "100%" }}>
        <figure
          className="media-poster"
          style={{ backgroundImage: `url(${moviePosterPath})` }}
        ></figure>
        <p className="title">{mediaData.original_title}</p>
      </section>
      <section className="overview-section">
        <h2>Overview</h2>
        <p>{mediaData.overview}</p>
      </section>
      <section className="info-section">
        <button className="button" onClick={handleInfo}>
          Info
        </button>
        {clicked && (
          <ul className="info-list">
            <li>
              genres:{" "}
              {mediaData.genres?.map((genres) => genres.name).join(", ")}
            </li>
            <li>
              origin country:{" "}
              {mediaData.origin_country?.map((origin) => origin)}
            </li>
            <li>original language: {mediaData.original_language}</li>
            {isTvseries ? false : <li>revenue: mediaData.revenue</li>}
            <li>rated_adult: {mediaData.adult ? "Yes" : "No"}</li>
            {isTvseries ? false : <li>runtime: {mediaData.runtime}</li>}
            <li>Number of seasons: {mediaData.number_of_seasons}</li>
            <li>status: {mediaData.status}</li>
            {isTvseries ? false : <li>budget: {mediaData.budget}</li>}
            <li>vote count: {mediaData.vote_count}</li>
            <li>average vote: {mediaData.vote_average}</li>
          </ul>
        )}
      </section>
      <section className="video-clips">
        <h2>Video clips/trailers</h2>
        <section className="iframe-container">
          {trailers.data?.map((clip) => (
            <div>
              <iframe
                key={clip.link}
                src={clip.link}
                title={clip.name}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
              <p className="iframe-title">{clip.name}</p>
              <p>type: {clip.type}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
