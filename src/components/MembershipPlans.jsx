import React from "react";

function MembershipPlans({ carrito, toggleCarrito }) {
  const planes = [
    {
      id: "m1",
      nombre: "Basic",
      precio: 4.99,
      descripcion: "Acceso a juegos clásicos y descuentos especiales.",
      categoria: "membresia",
    },
    {
      id: "m2",
      nombre: "Pro",
      precio: 9.99,
      descripcion: "Acceso a nuevos lanzamientos y eventos online.",
      categoria: "membresia",
    },
    {
      id: "m3",
      nombre: "Premium",
      precio: 14.99,
      descripcion: "Acceso ilimitado a todo el catálogo + exclusivos.",
      categoria: "membresia",
    },
  ];

  const estaEnCarrito = (id) => carrito.some((p) => p.id === id);

  return (
    <section id="membresias" className="seccion">
      <h2 className="titulo-con-icono">
        <span className="icono">💎</span> Planes de Membresía
      </h2>
      <p>Únete y obtén beneficios exclusivos:</p>

      <div className="planes-grid">
        {planes.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h3>{plan.nombre}</h3>
            <p>{plan.descripcion}</p>
            <p className="precio">${plan.precio.toFixed(2)}</p>
            <button
              className={`btn ${
                estaEnCarrito(plan.id) ? "btn-en-carrito" : ""
              }`}
              onClick={() => toggleCarrito(plan)}
            >
              {estaEnCarrito(plan.id)
                ? "En el carrito ✅"
                : "Agregar al carrito 🛒"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipPlans;
