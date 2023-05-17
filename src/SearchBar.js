import { useState } from "react";
import "./index.css";

function SearchBar({ onSubmit }) {
  const [term, SetTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    SetTerm("");
  };

  const handleChange = (event) => {
    SetTerm(event.target.value);
  };

  return (
    <div className="search-bar search-bar form">
      <form onSubmit={handleFormSubmit}>
        <label>Add a 40k Army</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
