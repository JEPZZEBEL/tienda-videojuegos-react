function CategorySection({ onCategorySelect }) {
  const categorias = [
    {
      id: "pc",
      titulo: "Juegos PC",
      descripcion: "Últimos lanzamientos de PC.",
      img: "img/diablo.jpg",
    },
    {
      id: "consolas",
      titulo: "Juegos Consola",
      descripcion: "Títulos para PlayStation, Xbox y Nintendo.",
      img: "img/Spiderman2.jpg",
    },
    {
      id: "accesorios",
      titulo: "Accesorios",
      descripcion: "Mandos, teclados y headsets.",
      img: "img/MouseRGB.jpg",
    },
    {
      id: "ofertas",
      titulo: "Ofertas",
      descripcion: "Descuentos limitados.",
      img: "img/AventuraIndie.jpg",
    },
  ];

  return (
    <div className="grid-cards">
      {categorias.map((cat) => (
        <div
          key={cat.id}
          className="card"
          onClick={() => onCategorySelect(cat.id)} // 👈 envía la categoría en minúsculas
        >
          <div
            className="thumb"
            style={{ backgroundImage: `url(${cat.img})` }}
          ></div>
          <h3>{cat.titulo}</h3>
          <p>{cat.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
