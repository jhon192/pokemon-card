import axios from "axios";
import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [Datos, setDatos] = useState({
    id: "",
    name: "",
    img: "",
    height: "",
    weight: "",
  });

  const PokeApi = e => {
    console.log('hello world')
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 300) + 100}`)
      .then((result) => {
        setDatos({
          id: result.data.id,
          name: result.data.name,
          img: result.data.sprites.front_default,
          height: result.data.height,
          weight: result.data.weight,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="h-100 w-100">
        <Card Datos={Datos} PokeApi={PokeApi} />
      </div>
    </div>
  );
}

export default App;
