import errorImage from "../assets/error-image.jpg";
export default function FetchError() {
  return (
    <section className="error-section">
      <img
        src={errorImage}
        alt="error page illustration"
        width="350"
        height="auto"
      />
      <p>An error occured unable to fetch data!!!</p>
    </section>
  );
}
