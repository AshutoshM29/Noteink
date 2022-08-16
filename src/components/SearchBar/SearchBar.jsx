import "../SearchBar/SearchBar.css";
import { useFilter, useSearch } from "../../context/index";

const SearchBar = () => {
  const { setShowFilterModal } = useFilter();
  const { search, setSearch } = useSearch();

  return (
    <div className="container-search-bar">
      <i className="material-icons icon-search icons-left">search</i>
      <input
        className="input-search-bar"
        type="text"
        id="search-bar"
        placeholder="search"
        name="search-bar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <i
        className="material-icons icon-search icon-right"
        onClick={() => setShowFilterModal(true)}
      >
        tune
      </i>
    </div>
  );
};

export { SearchBar };