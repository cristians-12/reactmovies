import { useState } from "react";
import "./App.css";
import conResultado from "./mocks/conResultado.json";
import sinResultado from "./mocks/sinResultado.json";
import {CondiPelis } from "./components/RenderizarPelis.jsx";

function App() {
  const pelis = conResultado.Search;
  const hayPelis = pelis?.length > 0;

  return (
    <>
      <header>
        <form className="formulario flex">
          <input
            type="text"
            className="w-[100%]"
            placeholder="Ingresa el nombre de la pelicula."
          />
          <button className="text-red-500">Buscar</button>
        </form>
      </header>

      <main>
        <CondiPelis hayPelis={hayPelis} pelis={pelis} />
      </main>
    </>
  );
}

export default App;
