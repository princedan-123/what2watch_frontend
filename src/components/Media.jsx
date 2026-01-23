import "../pages/media.css";
import "../index.css";
import { useState } from "react";
import spinner from "../assets/spinner.svg";
import errorImage from "../assets/error-image.jpg";

export default function Media({ mediaData, trailers }) {
  const [clicked, setClicked] = useState(false);
  const moviePosterPath = `https://image.tmdb.org/t/p/w342${mediaData.poster_path}`;
  function handleInfo() {
    setClicked((prev) => !prev);
  }
  return (
    <section className="media-container">
      <section>
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
              genres: {mediaData.genres.map((genres) => genres.name).join(", ")}
            </li>
            <li>
              origin country: {mediaData.origin_country.map((origin) => origin)}
            </li>
            <li>original language: {mediaData.original_language}</li>
            <li>revenue: {mediaData.revenue}</li>
            <li>runtime: {mediaData.runtime}</li>
            <li>status: {mediaData.status}</li>
            <li>budget: {mediaData.budget}</li>
            <li>vote count: {mediaData.vote_count}</li>
            <li>average vote: {mediaData.vote_average}</li>
          </ul>
        )}
      </section>
      <section className="video-clips">
        <h2>Video clips/trailers</h2>
        <section className="iframe-container">
          {trailers.data.map((clip) => (
            <div>
              <iframe
                key={clip.link}
                className="iframe-clip"
                src={clip.link}
                title={clip.name}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
              <p>{clip.name}</p>
              <p>type: {clip.type}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
