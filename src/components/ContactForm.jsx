import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    plataforma: "PC",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Gracias ${formData.nombre}, hemos recibido tu mensaje sobre ${formData.plataforma}. ¡Te contactaremos pronto!`
    );
    setFormData({ nombre: "", correo: "", plataforma: "PC", mensaje: "" });
  };

  return (
    <section id="contacto" className="seccion">
      <h2>Reserva o contáctanos</h2>

      <form className="form-contacto" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="tucorreo@ejemplo.com"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="plataforma">Plataforma favorita</label>
          <select
            id="plataforma"
            name="plataforma"
            value={formData.plataforma}
            onChange={handleChange}
          >
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo">Nintendo</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿Qué juego buscas o en qué podemos ayudarte?"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
