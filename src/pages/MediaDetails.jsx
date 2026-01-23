import { useQuery } from "@tanstack/react-query";
import getMovie from "../queries/getMovie";
import FetchError from "../errorPages/FetchError";
import "../errorPages/errorPage.css";
import spinner from "../assets/spinner.svg";
import "./media.css";
import { useParams } from "react-router-dom";
import Media from "../components/Media";
import getMovieTrailer from "../queries/getMovieTrailer";
export default function MediaDetails() {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["media", id],
    queryFn: getMovie,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
  const trailerQueryResponse = useQuery({
    queryKey: ["movie", "trailer", id],
    queryFn: getMovieTrailer,
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
  return (
    <section>
      <Media mediaData={data} trailers={trailerQueryResponse} />
    </section>
  );
}
