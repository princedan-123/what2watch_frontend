export default async function getSearchResults({ queryKey }) {
  const [mediaSelection, query, currentPage] = queryKey;
  const tvShowEndpoint = `https://what2watch-1gh0.onrender.com/tvshow/search?query=${query}&page=${currentPage}`;
  const movieEndpoint = `https://what2watch-1gh0.onrender.com/movie/search?query=${query}&page=${currentPage}`;
  const finalEndpoint =
    mediaSelection == "movie" ? movieEndpoint : tvShowEndpoint;

  console.log(`finalEndpoint: ${finalEndpoint}`);
  const result = await fetch(finalEndpoint);
  if (result.ok) {
    return result.json();
  }
  const error = new Error("request failed");
  error.status = result.status;
  error.statusText = result.statusText;
  throw error;
}
