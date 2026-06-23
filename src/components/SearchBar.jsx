function SearchBar({ search, setSearch }) {
    return (
        <input
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;