import { useState } from "react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  function handleInput(event) {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  }
  function handleFormSubmit() {
    navigate(`/search?q=${searchValue}`);
  }
  return (
    <section>
      <form className="form" action={handleFormSubmit}>
        <input type="text" className="search-form" onChange={handleInput} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </section>
  );
}
