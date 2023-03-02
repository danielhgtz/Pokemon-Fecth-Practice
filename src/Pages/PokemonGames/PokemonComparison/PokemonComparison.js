import { useState, useEffect } from "react";
import { randomNumber } from "../../../Utiles/Utiles";
import { useNavigate } from "react-router-dom";
import pokemonLogo from "../../../Assets/pokemonLogo.png";
import "./PokemonComparison.css";
import { Button } from "antd";

const PokemonComparison = () => {
  const [mensaje, setMensaje] = useState("Who is the best pokemon?");
  const [pokemonData1, setPokemonData1] = useState({});
  const [pokemonData2, setPokemonData2] = useState({});
  const navigate = useNavigate();

  const firstPokemonButton = () => {
    if (pokemonData1.pokeStats > pokemonData2.pokeStats) {
      setMensaje(`Correct it's ${pokemonData1.pokemonName}!`);
    } else {
      setMensaje(`That's incorrect :( It's not ${pokemonData1.pokemonName}.`);
    }
  };

  const secondPokemonButton = () => {
    if (pokemonData2.pokeStats > pokemonData1.pokeStats) {
      setMensaje(`Correct it's ${pokemonData2.pokemonName}!`);
    } else {
      setMensaje(`That's incorrect :( It's not ${pokemonData2.pokemonName}.`);
    }
  };

  const fetchData = async (randomPokemonNumber, setPokemonData) => {
    const resultado = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`
    ).then((res) => res.json());

    const resultadoHP = resultado.stats[0].base_stat;
    const resultadoAttack = resultado.stats[1].base_stat;
    const resultadoDf = resultado.stats[2].base_stat;
    const resultadoSpAttack = resultado.stats[3].base_stat;
    const resultadoSpDf = resultado.stats[4].base_stat;
    const resultadoSpeed = resultado.stats[5].base_stat;
    const pokeStats =
      resultadoHP +
      resultadoAttack +
      resultadoDf +
      resultadoSpAttack +
      resultadoSpDf +
      resultadoSpeed;

    const pokemonName = resultado.species.name;

    setPokemonData({
      pokemonName: pokemonName,
      pokemonImage: "/pokemon/" + randomPokemonNumber + ".png",
      pokeStats: pokeStats,
    });
  };

  const randomPokemonNumber1 = randomNumber();
  const randomPokemonNumber2 = randomNumber();

  useEffect(() => {
    fetchData(randomPokemonNumber1, setPokemonData1);
    fetchData(randomPokemonNumber2, setPokemonData2);
  }, []);

  return (
    <div className="mainBox">
      <p className="PokemonComparisonTitle">{"Choose the strongest"}</p>
      <img className="pokemonLogo" src={pokemonLogo} />
      <div className="pokemonComparisonImageBox">
        <img
          className="pokemonChiquitoIzquierda"
          src={pokemonData1.pokemonImage}
          onClick={firstPokemonButton}
        />

        <img
          className="pokemonChiquitoDerecha"
          src={pokemonData2.pokemonImage}
          onClick={secondPokemonButton}
        />
      </div>
      <h1 className="correctIncorrectMessage">{mensaje}</h1>

      <Button
        className="linkHome"
        type="primary"
        onClick={() => {
          navigate("../", { replace: true });
        }}
      >
        Generate a Random Pokemon
      </Button>
    </div>
  );
};

export default PokemonComparison;
