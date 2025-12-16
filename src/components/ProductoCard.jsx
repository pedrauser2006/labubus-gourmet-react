import "../assets/css/estilo_menu.css";

const ProductoCard = ({ nombre, precio, descripcion, imagen }) => {
  const verDetalles = () => {
    alert(
      `Detalle\nNombre: ${nombre}\nPrecio: Bs ${precio}\nDescripción: ${descripcion}`
    );
  };

  return (
    <div className="card">
      {/* Imagen */}
      <img className="card__media" src={imagen} alt={nombre} />

      {/* Contenido */}
      <div className="card__body">
        <h4 className="card__title">{nombre}</h4>

        <p className="card__desc">{descripcion}</p>

        <div className="card__meta">
          <span className="price">Bs {precio}</span>

          <button className="btn" onClick={verDetalles}>
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
