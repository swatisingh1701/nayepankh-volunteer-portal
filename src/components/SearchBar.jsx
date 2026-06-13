function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search by Name or Email..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />

    </div>
  );
}

export default SearchBar;