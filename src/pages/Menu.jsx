import { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";

import pizzaCarnivora from "../assets/Imagenes/Pizza_carnivora.png";
import pizzaHawaiana from "../assets/Imagenes/Pizza_hawaiana.png";
import hamburguesaSimple from "../assets/Imagenes/Hamburguesa_simple.png";
import hamburguesaTocino from "../assets/Imagenes/Hamburguesa_tocino.png";
import salchipapa from "../assets/Imagenes/Salchipapa.png";
import pancakes from "../assets/Imagenes/Pancakes_miel.jpg";
import tostadas from "../assets/Imagenes/Tostadas_francesas.jpg";
import huevos from "../assets/Imagenes/Huevos_revueltos.png";
import omelette from "../assets/Imagenes/Omelette.png";
import cafe from "../assets/Imagenes/Cafe_cappuccino.jpg";
import jugo from "../assets/Imagenes/Jugo_de_naranja.jpg";

import comboCuadrado from "../assets/Imagenes/Combo_al_cuadrado.jpg";
import comboPatex from "../assets/Imagenes/Rescata_a_Patex.jpg";

import "../assets/css/estilo_menu.css";

const Menu = () => {
  /* ===============================
     CAPA 2 — MENÚ LOCAL
  =============================== */
  const platos = [
    {
      id: 1,
      nombre: "Pizza Carnivora",
      precio: 80,
      descripcion:
        "Pepperoni, Jamón, Tocino, Salchicha o chorizo, Carne molida o trozos de res. Tamaño Grande.",
      imagen: pizzaCarnivora,
    },
    {
      id: 2,
      nombre: "Pizza Hawaiana",
      precio: 70,
      descripcion:
        "Base de salsa de tomate, Queso mozzarella, Jamón en trozos o rebanadas, Piña en cubos o rodajas. Tamaño Grande.",
      imagen: pizzaHawaiana,
    },
    {
      id: 3,
      nombre: "Hamburguesa Simple",
      precio: 25,
      descripcion:
        "Pan de hamburguesa, Carne de res a la parrilla, Queso, Lechuga, tomate y cebolla, Kétchup, mostaza o mayonesa.",
      imagen: hamburguesaSimple,
    },
    {
      id: 4,
      nombre: "Hamburguesa con Tocino",
      precio: 32,
      descripcion:
        "Pan de sésamo o artesanal, Carne de res jugosa, Queso derretido, Tiras de tocino crocante, Lechuga y tomate, Kétchup, mayonesa o salsa barbacoa.",
      imagen: hamburguesaTocino,
    },
    {
      id: 5,
      nombre: "Salchipapa",
      precio: 20,
      descripcion:
        "Papas fritas cortadas en bastones, Salchichas, Kétchup, mostaza y mayonesa. Porción mediana.",
      imagen: salchipapa,
    },
    {
      id: 6,
      nombre: "Pancakes",
      precio: 25,
      descripcion:
        "Pancakes con miel o jarabe de maple acompañado con mantequilla, frutas frescas o crema. Porción mediana.",
      imagen: pancakes,
    },
    {
      id: 7,
      nombre: "Tostadas Francesas",
      precio: 20,
      descripcion:
        "Rebanadas de pan doradas en una delicada mezcla de huevo y leche y espolvoreada con azúcar o canela. Porción mediana.",
      imagen: tostadas,
    },
    {
      id: 8,
      nombre: "Huevos revueltos",
      precio: 22,
      descripcion:
        "Huevos revueltos cremosos acompañados de tocino crujiente y pan dorado.",
      imagen: huevos,
    },
    {
      id: 9,
      nombre: "Omelette Americano",
      precio: 20,
      descripcion: "Omelette relleno con jamón, queso o vegetales frescos.",
      imagen: omelette,
    },
    {
      id: 10,
      nombre: "Café o Cappuccino",
      precio: 10,
      descripcion:
        "Café preparado al momento, en versión clásica o con espuma cremosa.",
      imagen: cafe,
    },
    {
      id: 11,
      nombre: "Jugo de Naranja Natural",
      precio: 8,
      descripcion: "Jugo recién exprimido, fresco y lleno de sabor.",
      imagen: jugo,
    },
  ];

  const combos = [
    {
      id: 1,
      nombre: "Combo al cuadrado",
      precio: 130,
      descripcion: "Pizza familiar cuadrada carnívora + Refresco de 2 Litros.",
      imagen: comboCuadrado,
    },
    {
      id: 2,
      nombre: "Combo Rescata a Patex",
      precio: 70,
      descripcion:
        "Hamburguesa triple + Papas grandes + Refresco de 2 Litros + Labubu de regalo.",
      imagen: comboPatex,
    },
  ];

  /* ===============================
     CAPA 3 — API EXTERNA
  =============================== */
  const [productosAPI, setProductosAPI] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarProductosAPI = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        if (!response.ok) {
          throw new Error("No se pudo cargar la API");
        }
        const data = await response.json();
        setProductosAPI(data.meals || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarProductosAPI();
  }, []);

  const platosFiltrados = platos.filter((plato) =>
    plato.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const combosFiltrados = combos.filter((combo) =>
    combo.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const apiFiltrados = productosAPI.filter((plato) =>
    plato.strMeal.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main id="contenido" role="main" className="menu-page">
      <section id="intro-menu" className="intro">
        <h2>Menú</h2>
        <p>
          Explora nuestros <strong>platos normales</strong>,{" "}
          <strong>combos</strong> y productos obtenidos desde una{" "}
          <strong>API externa</strong>.
        </p>
      </section>

      <section className="section-body">
        <input
          type="text"
          placeholder="Escribe para buscar platos, combos o especiales…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="buscador"
        />
      </section>

      <p className="section-body ayuda">
        Puedes buscar por nombre, por ejemplo: pizza, café o combo.
      </p>

      {busqueda &&
        platosFiltrados.length === 0 &&
        combosFiltrados.length === 0 &&
        apiFiltrados.length === 0 && (
          <p className="section-body">
            No se encontraron resultados para "{busqueda}"
          </p>
        )}

      {/* PLATOS LOCALES */}
      <section aria-labelledby="titulo-platos">
        <header className="section-header">
          <h3 id="titulo-platos">Platos normales</h3>
        </header>

        <div className="grid">
          {platosFiltrados.map((plato) => (
            <ProductoCard
              key={plato.id}
              nombre={plato.nombre}
              precio={plato.precio}
              descripcion={plato.descripcion}
              imagen={plato.imagen}
            />
          ))}
        </div>
      </section>

      {/* COMBOS */}
      <section aria-labelledby="titulo-combos">
        <header className="section-header">
          <h3 id="titulo-combos">Combos Labubus</h3>
          <p>Selecciones especiales diseñadas por el equipo.</p>
        </header>

        <div className="grid">
          {combosFiltrados.map((combo) => (
            <ProductoCard
              key={combo.id}
              nombre={combo.nombre}
              precio={combo.precio}
              descripcion={combo.descripcion}
              imagen={combo.imagen}
            />
          ))}
        </div>
      </section>

      {/* API EXTERNA */}
      <section aria-labelledby="titulo-api">
        <header className="section-header">
          <h3 id="titulo-api">Platos especiales (API externa)</h3>
        </header>

        {loading && <p className="section-body">Cargando productos…</p>}
        {error && <p className="section-body error">{error}</p>}

        {!loading && !error && (
          <div className="grid">
            {apiFiltrados.map((plato) => (
              <ProductoCard
                key={plato.idMeal}
                nombre={plato.strMeal}
                precio={Math.floor(Math.random() * 40 + 20)}
                descripcion={plato.strCategory + " • " + plato.strArea}
                imagen={plato.strMealThumb}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Menu;
