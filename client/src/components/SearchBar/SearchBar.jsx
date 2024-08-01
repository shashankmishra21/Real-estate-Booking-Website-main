import React from "react";
import { HiLocationMarker } from "react-icons/hi";

// Ensure filter and setFilter are passed as props to the SearchBar component
const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-input" // Add a class for styling if needed
      />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;

// const SearchBar = ({ filter, setFilter }) => {
//   return (
//     <div className="flexCenter search-bar">
//       <HiLocationMarker color="var(--blue)" size={25} />
//       <input
//         placeholder="Search by title/city/country..."
//         type="text"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       />
//       <button className="button">Search</button>
//     </div>
//   );
// };

// export default SearchBar;
