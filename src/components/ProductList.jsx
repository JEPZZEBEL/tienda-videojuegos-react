import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList({ productos, carrito, toggleCarrito }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todos");
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    let resultado = productos;

    // 🔹 Filtrar por categoría (solo si no es “todos”)
    if (categoria !== "todos") {
      resultado = resultado.filter(
        (p) =>
          p.categoria &&
          p.categoria.toLowerCase().includes(categoria.toLowerCase())
      );
    }

    // 🔹 Filtrar por texto de búsqueda (si hay texto)
    if (busqueda.trim() !== "") {
      resultado = resultado.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    setFiltrados(resultado);
  }, [productos, busqueda, categoria]);

  return (
    <section className="seccion" id="catalogo">
      {/* 🔍 Buscador */}
      <div className="buscador-top">
        <span className="icono">🔎</span>
        <input
          type="search"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* 🧭 Filtros de categoría */}
      <div className="filtros" style={{ textAlign: "center", margin: "16px 0" }}>
        <button
          className={`btn ${categoria === "todos" ? "is-active" : ""}`}
          onClick={() => setCategoria("todos")}
        >
          Todos
        </button>
        <button
          className={`btn ${categoria === "pc" ? "is-active" : ""}`}
          onClick={() => setCategoria("pc")}
        >
          PC
        </button>
        <button
          className={`btn ${categoria === "consolas" ? "is-active" : ""}`}
          onClick={() => setCategoria("consolas")}
        >
          Consolas
        </button>
        <button
          className={`btn ${categoria === "accesorios" ? "is-active" : ""}`}
          onClick={() => setCategoria("accesorios")}
        >
          Accesorios
        </button>
        <button
          className={`btn ${categoria === "ofertas" ? "is-active" : ""}`}
          onClick={() => setCategoria("ofertas")}
        >
          Ofertas
        </button>
      </div>

      {/* 🧩 Lista de productos o mensaje de error */}
      {filtrados.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "1.1rem",
            color: "#ff4f8b",
          }}
        >
          ❌ No se encontraron productos para{" "}
          <strong>
            {busqueda.trim() !== "" ? `"${busqueda}"` : categoria.toUpperCase()}
          </strong>
          .
        </p>
      ) : (
        <div className="grid-cards">
          {filtrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              enCarrito={!!carrito.find((p) => p.id === producto.id)}
              toggleCarrito={toggleCarrito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
