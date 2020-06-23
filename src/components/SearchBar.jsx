import React from "react";

export const SearchBar = ({ value, handleChange }) => {
  return (
    <div className="characters-search-bar mb-5">
      <input
        value={value}
        onChange={handleChange}
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};
