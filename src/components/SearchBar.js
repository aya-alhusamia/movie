const SearchBar = (props) => {
  return (
    <input
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a Movies name"
    />
  );
};

export default SearchBar;
