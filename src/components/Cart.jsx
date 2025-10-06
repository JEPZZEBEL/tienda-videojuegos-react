function Cart({ carrito, toggleCarrito }) {
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);

  return (
    <section className="seccion carrito-seccion">
      <h2 className="titulo-con-icono">
        <span className="icono">🛍️</span> Carrito de compras
      </h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío 😔</p>
      ) : (
        <div className="cart-list">
          {carrito.map((item) => (
            <div className="cart-row" key={item.id}>
              <div
                className="cart-thumb"
                style={{
                  backgroundImage: `url(/${item.img})`,
                }}
              ></div>

              <div className="cart-info">
                <div className="cart-title-price">
                  <h3>{item.nombre}</h3>
                  <span className="cart-price">
                    ${item.precio.toLocaleString("es-CL")}
                  </span>
                </div>

                <div className="cart-actions">
                  <button className="btn" onClick={() => toggleCarrito(item)}>
                    ❌ Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ${total.toLocaleString("es-CL")}</h3>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
