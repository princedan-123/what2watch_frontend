/* Page for popular tvshows */
import MediaList from "../components/MediaList";
import { useQuery } from "@tanstack/react-query";
import FetchError from "../errorPages/FetchError";
import "../errorPages/errorPage.css";
import spinner from "../assets/spinner.svg";
import { useState } from "react";
import "../styles/media.css";
import getUpcomingTvseries from "../queries/getUpcomingTvseries";

export default function UpcomingTvseries() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["series", "upcoming-tvseries", currentPage],
    queryFn: getUpcomingTvseries,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
  if (isLoading) {
    return (
      <div className="spinner">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
  if (isFetching) {
    return (
      <div className="spinner">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
  if (isError) {
    return <FetchError />;
  }
  const total_pages = data.total_pages;
  function handleNext() {
    currentPage < total_pages
      ? setCurrentPage((prev) => prev + 1)
      : setCurrentPage(total_pages);
  }
  function handlePrev() {
    currentPage > 1 ? setCurrentPage((prev) => prev - 1) : setCurrentPage(1);
  }
  return (
    <>
      <section className="media-list">
        {data.results.map((tvshow) => (
          <MediaList
            key={tvshow.id}
            id={tvshow.id}
            posterPath={tvshow.poster_path}
            title={tvshow.name}
            releaseDate={tvshow.first_air_date}
            popularity={tvshow.popularity}
          />
        ))}
      </section>
      <section className="current-page">
        <p>page: {currentPage}</p>
      </section>
      <section className="pagination-section">
        {currentPage > 1 ? (
          <div className="first-page">
            <button className="button">First</button>
          </div>
        ) : (
          false
        )}
        {currentPage > 1 ? (
          <div className="previous-page">
            <button className="button" onClick={handlePrev}>
              Previous
            </button>
          </div>
        ) : (
          false
        )}
        {currentPage < total_pages ? (
          <div className="next-page">
            <button className="button" onClick={handleNext}>
              Next
            </button>
          </div>
        ) : (
          false
        )}
        {currentPage < total_pages ? (
          <div className="last-page">
            <button className="button">Last</button>
          </div>
        ) : (
          false
        )}
      </section>
    </>
  );
}
