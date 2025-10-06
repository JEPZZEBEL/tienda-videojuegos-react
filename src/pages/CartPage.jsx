import { Link } from "react-router-dom";
import { useState } from "react";
import "./CartPage.css";

function CartPage({ carrito, toggleCarrito, setCarrito }) {
  const [metodoPago, setMetodoPago] = useState(""); // ✅ Método de pago seleccionado
  const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    setCarrito(
      carrito.map((p) =>
        p.id === id ? { ...p, cantidad } : p
      )
    );
  };

  const procesarPago = () => {
    if (!metodoPago) {
      alert("⚠️ Selecciona un método de pago antes de continuar.");
      return;
    }

    alert(`💳 Redirigiendo al pago con ${metodoPago}... (Simulación de checkout)`);
  };

  return (
    <div className="container seccion">
      <h2 className="titulo-con-icono">
        <span className="icono">🛍️</span> Carrito de compras
      </h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío 😔</p>
      ) : (
        <>
          <div className="cart-list">
            {carrito.map((item) => (
              <div className="cart-row" key={item.id}>
                {/* ✅ Imagen del producto */}
                <div
                  className="cart-thumb"
                  style={{
                    backgroundImage: `url(/img/${item.img})`,
                  }}
                ></div>

                <div className="cart-info">
                  <div className="cart-title-price">
                    <h3>{item.nombre}</h3>
                    <span className="cart-price">
                      ${item.precio.toFixed(2)}
                    </span>
                  </div>

                  {/* ✅ Controles de cantidad */}
                  <div className="cart-actions">
                    <button
                      className="btn"
                      onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                    >
                      ➖
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      className="btn"
                      onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                    >
                      ➕
                    </button>
                    <button className="btn" onClick={() => toggleCarrito(item)}>
                      ❌ Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Total y método de pago */}
          <div className="cart-total">
            <h3 style={{ color: "#39ff14" }}>
              Total: ${total.toFixed(2)}
            </h3>

            <div className="form-contacto" style={{ marginTop: "1rem" }}>
              <h4>Selecciona un método de pago:</h4>
              <div className="medios-pago neon">
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value="Tarjeta"
                    onChange={(e) => setMetodoPago(e.target.value)}
                  />{" "}
                  💳 Tarjeta
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value="Transferencia"
                    onChange={(e) => setMetodoPago(e.target.value)}
                  />{" "}
                  🏦 Transferencia
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value="PayPal"
                    onChange={(e) => setMetodoPago(e.target.value)}
                  />{" "}
                  🪙 PayPal
                </label>
              </div>
            </div>

            <button className="btn" onClick={procesarPago}>
              Ir a pagar ➡️
            </button>
          </div>
        </>
      )}

      <div style={{ marginTop: "1rem" }}>
        <Link to="/" className="btn">
          ⬅️ Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
