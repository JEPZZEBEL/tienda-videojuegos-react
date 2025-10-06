function SearchBar({ onSearch }) {
  return (
    <div className="buscador-top">
      <span className="icono">🔍</span>
      <input
        type="search"
        placeholder="Busca tu juego o producto..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
