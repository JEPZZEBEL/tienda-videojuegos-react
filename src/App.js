/**
 * Proyecto: Tienda de Videojuegos Martín’s
 * Actividad: Mejorando funcionalidades clave en el eCommerce con React
 * Descripción: 
 * - Catálogo dinámico de productos.
 * - Carrito interactivo con persistencia en localStorage.
 * - Filtros por categoría y búsqueda.
 * - Simulación de compra
 * Autor: Dubraska Martins
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductList from "./components/ProductList";
import MembershipPlans from "./components/MembershipPlans";
import PaymentMethods from "./components/PaymentMethods";
import ContactForm from "./components/ContactForm";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todos");

  // 🔹 Cargar productos desde /data/productos.json
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/productos.json`)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  // 🔹 Cargar carrito guardado
  useEffect(() => {
    const guardado = localStorage.getItem("carrito");
    if (guardado) setCarrito(JSON.parse(guardado));
  }, []);

  // 🔹 Guardar carrito cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // 🔹 Agregar o eliminar productos
  const toggleCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      setCarrito(carrito.filter((p) => p.id !== producto.id));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // 🔹 NUEVA LÓGICA DE FILTRO (corrige el error de “PC”)
  const productosFiltrados = productos.filter((p) => {
    // Si hay texto de búsqueda, prioriza la búsqueda
    if (busqueda.trim() !== "") {
      return p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    }

    // Si no hay búsqueda, filtra solo por categoría
    if (categoria === "todos") return true;
    return p.categoria.toLowerCase() === categoria.toLowerCase();
  });

  return (
    <Router>
      <Header totalCarrito={carrito.reduce((acc, p) => acc + p.cantidad, 0)} />

      <Routes>
        {/* 🏠 Página principal */}
        <Route
          path="/"
          element={
            <main className="container">
              {/* HERO */}
              <Hero onSearch={setBusqueda} />

              {/* CATEGORÍAS */}
              <section id="categorias" className="seccion">
                <h2>Categorías</h2>
                <CategorySection onCategorySelect={setCategoria} />
              </section>

              {/* PRODUCTOS */}
              <section id="catalogo" className="seccion">
                {productosFiltrados.length === 0 ? (
                  <p style={{ color: "#ff4f8b", textAlign: "center" }}>
                    ❌ No se encontraron productos con ese criterio.
                  </p>
                ) : (
                  <ProductList
                    productos={productosFiltrados}
                    carrito={carrito}
                    toggleCarrito={toggleCarrito}
                  />
                )}
              </section>

              {/* MEMBRESÍAS, PAGOS Y CONTACTO */}
              <MembershipPlans carrito={carrito} toggleCarrito={toggleCarrito} />
              <PaymentMethods />
              <ContactForm />
            </main>
          }
        />

        {/* 🛒 CARRITO */}
        <Route
          path="/carrito"
          element={
            <CartPage
              carrito={carrito}
              setCarrito={setCarrito}
              toggleCarrito={toggleCarrito}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
