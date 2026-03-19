import React from "react";

const SearchBar = ({ value, onChange }) => {

  return (
    <>
      <input
        placeholder="Search Product..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
    </>
  );
};

export default SearchBar;
