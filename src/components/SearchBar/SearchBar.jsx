import "../SearchBar/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-search-bar">
      <i className="material-icons icon-search icons-left">search</i>
      <input
        className="input-search-bar"
        type="text"
        id="search-bar"
        placeholder="search"
        name="search-bar"
      />
      <i className="material-icons icon-search icon-right">
        tune
      </i>
    </div>
  );
};

export { SearchBar };