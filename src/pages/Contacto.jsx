import { useState } from "react";
import "../assets/css/estilo_contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [personas, setPersonas] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("");
  const [contador, setContador] = useState(0);

  const actualizarContador = (value) => {
    setMensaje(value);
    setContador(value.length);
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!email.includes("@")) nuevosErrores.email = "Correo inválido.";
    if (!telefono.trim())
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    if (!personas) nuevosErrores.personas = "Selecciona una opción.";
    if (!hora) nuevosErrores.hora = "Debes elegir un horario.";
    if (!mensaje.trim()) nuevosErrores.mensaje = "Escribe un mensaje.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (!validar()) {
      setEstado("Corrige los errores antes de enviar.");
      return;
    }

    setEstado("¡Mensaje enviado con éxito!");

    // Aquí podrías enviar datos a backend o a App.jsx
    // console.log({ nombre, email, telefono, personas, hora, mensaje });

    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setTelefono("");
    setPersonas("");
    setHora("");
    setMensaje("");
    setContador(0);
    setEstado("");
    setErrores({});
  };

  return (
    <main id="contenido" className="contacto-page">
      <section className="intro">
        <h2>Contacto y Reservas</h2>
        <p>
          Déjanos tu consulta o solicita una reserva. Te responderemos pronto.
        </p>
      </section>

      <section aria-labelledby="titulo-form">
        <div className="section-header">
          <h3 id="titulo-form">Formulario</h3>
        </div>

        <form
          onSubmit={enviarFormulario}
          onReset={limpiarFormulario}
          noValidate
        >
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errores.email && <p className="error">{errores.email}</p>}

          <label>Teléfono</label>
          <input
            type="tel"
            placeholder="Tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          {errores.telefono && <p className="error">{errores.telefono}</p>}

          <label>Número de personas</label>
          <select
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          >
            <option value="">Selecciona...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          {errores.personas && <p className="error">{errores.personas}</p>}

          <label>Hora tentativa (12:00-22:00)</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          {errores.hora && <p className="error">{errores.hora}</p>}

          <label>Mensaje</label>
          <textarea
            rows="4"
            placeholder="Detalle tu consulta o reserva…"
            value={mensaje}
            onChange={(e) => actualizarContador(e.target.value)}
          ></textarea>

          <div id="contador">{contador}/200</div>
          {errores.mensaje && <p className="error">{errores.mensaje}</p>}

          <button type="submit" className="btn btn--primary">
            Enviar
          </button>
          <button type="reset" className="btn">
            Limpiar
          </button>

          <p className="estado">{estado}</p>
        </form>
      </section>

      <section aria-labelledby="titulo-datos">
        <div className="section-header">
          <h3 id="titulo-datos">Datos de contacto</h3>
        </div>
        <p>
          Dirección: Av. 14 de Septiembre, Obrajes, La Paz <br />
          Teléfono: 1298563 • WhatsApp: 77756186 <br />
          Horario: Lunes a Sábado 12:00-22:00
        </p>
      </section>
    </main>
  );
};

export default Contacto;
