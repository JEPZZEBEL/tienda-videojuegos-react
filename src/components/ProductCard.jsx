function ProductCard({ producto, enCarrito, toggleCarrito }) {
  return (
    <div className="card">
      <div
        className="thumb"
        style={{ backgroundImage: `url(/img/${producto.img})` }}
      ></div>
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      <button
        className={enCarrito ? "btn btn-en-carrito" : "btn"}
        onClick={() => toggleCarrito(producto)}
      >
        {enCarrito ? "En el carrito ✅" : "Agregar al carrito 🛒"}
      </button>
    </div>
  );
}

export default ProductCard;
