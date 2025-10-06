import { Link, useNavigate } from "react-router-dom";

function Header({ totalCarrito }) {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="encabezado">
      <div className="container">
        <Link to="/" className="logo">
          Tienda de Videojuegos Martin´s
        </Link>

        <nav>
          <ul className="menu">
            <li>
              <button className="link-btn" onClick={() => scrollToSection("categorias")}>
                Categorías
              </button>
            </li>
            <li>
              <button className="link-btn" onClick={() => scrollToSection("membresias")}>
                Membresías
              </button>
            </li>
            <li>
              <button className="link-btn" onClick={() => scrollToSection("pagos")}>
                Pagos
              </button>
            </li>
            <li>
              <button className="link-btn" onClick={() => scrollToSection("contacto")}>
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        <Link to="/carrito" className="cart-link">
          <span className="cart-ico">🛒</span>
          <span className="cart-badge">{totalCarrito}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
