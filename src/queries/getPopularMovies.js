export default async function getPopularMovies({ queryKey }) {
  const [, , currentPage] = queryKey;
  const endpoint = `https://what2watch-1gh0.onrender.com/movie/popular?page=${currentPage}`;
  const result = await fetch(endpoint);
  if (result.ok) {
    return result.json();
  }
  const error = new Error("request failed");
  error.status = result.status;
  error.statusText = result.statusText;
  throw error;
}
