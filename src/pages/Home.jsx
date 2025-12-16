import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import chefImg from "../assets/Imagenes/Chef_Labubu.jpg";
import relojImg from "../assets/Imagenes/Reloj.jpg";
import patexImg from "../assets/Imagenes/Patex.jpg";

import "../assets/css/estilo_index.css";

const Home = () => {
  const [fechaActual, setFechaActual] = useState("—");
  const [estadoLocal, setEstadoLocal] = useState("—");
  const [mensajeDia, setMensajeDia] = useState("—");

  const actualizarDatos = () => {
    const ahora = new Date();

    // Fecha y hora
    setFechaActual(ahora.toLocaleString());

    // Estado del local
    const hora = ahora.getHours();
    if (hora >= 12 && hora < 22) {
      setEstadoLocal("Abierto");
    } else {
      setEstadoLocal("Cerrado");
    }

    // Mensaje del día
    const dia = ahora.getDay();
    switch (dia) {
      case 0:
        setMensajeDia(
          "¡Domingo de descanso! Desayunos y sopitas reconfortantes."
        );
        break;
      case 1:
        setMensajeDia(
          "Lunes de menú ejecutivo. Ideal para empezar la semana con energía."
        );
        break;
      case 2:
        setMensajeDia("Martes de pasta artesanal en Labubus Gourmet.");
        break;
      case 3:
        setMensajeDia("Miércoles de parrillada: ¡ven con amigos!");
        break;
      case 4:
        setMensajeDia("Jueves de pizza al horno, masa casera.");
        break;
      case 5:
        setMensajeDia("Viernes de cocina internacional. Prueba algo nuevo.");
        break;
      case 6:
        setMensajeDia("Sábado familiar: 2x1 en postres desde las 18:00.");
        break;
      default:
        setMensajeDia("Bienvenido a Labubus Gourmet.");
    }
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  return (
    <div className="home">
      {/* Sección hero */}
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__content">
            <h2>Sacia tu creatividad y hambre con nuestros platillos</h2>
            <p>Combos únicos, promociones especiales y mucho más.</p>
            <Link to="/menu" className="btn btn--primary">
              Ver Menú
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <main id="contenido" role="main">
        <section className="intro">
          <h2>Bienvenidos</h2>
          <p>
            Comida rápida con sazón divertida. Descubre nuestros platos y combos
            del día.
          </p>
        </section>

        {/* Estado del local */}
        <section aria-labelledby="titulo-estado" className="block">
          <div className="section-header">
            <h3 id="titulo-estado">Estado del local</h3>
          </div>
          <div className="section-body">
            <p>
              <strong>Fecha y hora:</strong> <span>{fechaActual}</span>
            </p>
            <p>
              <strong>Estamos:</strong> <span>{estadoLocal}</span>
            </p>
            <button className="btn" onClick={actualizarDatos}>
              Actualizar hora
            </button>
          </div>
        </section>

        {/* Mensaje del día */}
        <section aria-labelledby="titulo-mensaje-dia" className="block">
          <div className="section-header">
            <h3 id="titulo-mensaje-dia">Mensaje del día</h3>
          </div>
          <p className="section-body">{mensajeDia}</p>
        </section>

        {/* Destacados */}
        <section aria-labelledby="titulo-destacados" className="block">
          <div className="section-header">
            <h3 id="titulo-destacados">¿Por qué elegirnos?</h3>
          </div>

          <div className="features-wrapper">
            <div className="features">
              <article className="feature">
                <img src={chefImg} alt="" className="feature__icon" />
                <h4>Recetas especiales</h4>
                <p>Preparaciones especiales con ingredientes frescos.</p>
              </article>

              <article className="feature">
                <img src={relojImg} alt="" className="feature__icon" />
                <h4>Atención puntual</h4>
                <p>Servicio ágil y horario corrido de 12:00 a 22:00.</p>
              </article>

              <article className="feature">
                <img src={patexImg} alt="" className="feature__icon" />
                <h4>Combos únicos</h4>
                <p>Propuestas especiales del equipo Labubus.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Explorar menú */}
        <section aria-labelledby="titulo-explora" className="block">
          <div className="section-header">
            <h3 id="titulo-explora">Explora el Menú</h3>
          </div>
          <p className="section-body">
            Conoce nuestros <Link to="/menu">platos normales</Link> y los{" "}
            <Link to="/menu">combos especiales</Link>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
