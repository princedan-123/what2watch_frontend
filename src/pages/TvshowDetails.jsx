/* Page for a specific tvshow */
import { useQuery } from "@tanstack/react-query";
import FetchError from "../errorPages/FetchError";
import "../errorPages/errorPage.css";
import spinner from "../assets/spinner.svg";
import "../styles/media.css";
import { useParams } from "react-router-dom";
import Media from "../components/Media";
import getTvshow from "../queries/getTvshow";
import getTvshowTrailer from "../queries/getTvshowTrailer";

export default function TvshowDetails() {
  const { id } = useParams();
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["tvshow", id],
    queryFn: getTvshow,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
  const trailerQueryResponse = useQuery({
    queryKey: ["tvshow", "trailer", id],
    queryFn: getTvshowTrailer,
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
