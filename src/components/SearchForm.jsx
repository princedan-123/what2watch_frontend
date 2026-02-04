import { useState } from "react";
import "../styles/index.css";

export default function SearchForm() {
  const [initialInput, setInitial_Input] = useState("");
  const [finalSearchInput, setFinalSearchInput] = useState(null);
  function handleInput(event) {
    const inputValue = event.target.value();
    setInitial_Input(inputValue);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    setFinalSearchInput(initialInput);
  }
  return (
    <section>
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" className="search-form" onChange={handleInput} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </section>
  );
}
