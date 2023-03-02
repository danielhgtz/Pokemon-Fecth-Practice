import React, { useEffect, useState } from "react";
import { randomNumber } from "../../../Utiles/Utiles";
import { useNavigate } from "react-router-dom";
import pokemonLogo from "../../../Assets/pokemonLogo.png";
import { Button } from "antd";
import "./PokedexGame.css";

const PokedexGame = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Find it");
  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
    ).then((res) => res.json());
    setPokemonName(result.name);
  };

  const discoverPokemon = () => {
    if (!show) {
      setShow(true);
      setPokemonNumber(randomNumber());
      setButtonMessage("Find another!");
    } else {
      setPokemonNumber(randomNumber());
    }
  };

  useEffect(() => {
    fetchData();
  }, [discoverPokemon]);

  return (
    <div className="mainBox">
      <div>
        <h4 className="PokedexGameTitle">Generate a random</h4>
        <img className="pokemonLogo" src={pokemonLogo} />
      </div>

      <Button
        type="primary"
        className="onClickDiscoverPokemon"
        onClick={discoverPokemon}
      >
        {buttonMessage}
      </Button>
      {show ? (
        <div>
          <h4 className="pokemonName">{pokemonName}</h4>
          <img
            className="pokedexGameImage"
            src={"/pokemon/" + pokemonNumber + ".png"}
            alt="Pokemon"
          />
        </div>
      ) : null}

      <Button
        className="linkPokemonComparison"
        type="primary"
        onClick={() => {
          navigate("../PokemonComparison", { replace: true });
        }}
      >
        Who is the best pokemon?
      </Button>
    </div>
  );
};

export default PokedexGame;
