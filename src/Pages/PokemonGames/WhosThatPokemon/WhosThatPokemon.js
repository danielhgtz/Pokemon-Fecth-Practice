// import { useState, useEffect } from "react";
// import { randomNumber, shuffle } from "../../../Utiles/Utiles";

// const PokeWhoseThatPokemon = () => {
//   const [mensaje, setMensaje] = useState("Who's that Pokemon?");
//   const [resultado, setResultado] = useState("");
//   const [imagen1, setImagen1] = useState("");
//   const [enseñar, setEnseñar] = useState(false);
//   const [aparecer, setAparecer] = useState(false);
//   const [pokemonData1, setPokemonData1] = useState({});
//   const [pokemonData2, setPokemonData2] = useState({});
//   const [pokemonData3, setPokemonData3] = useState({});
//   const [pokemonData4, setPokemonData4] = useState({});

//   const nombres = [
//     pokemonData1.pokemonName,
//     pokemonData2.pokemonName,
//     pokemonData3.pokemonName,
//     pokemonData4.pokemonName,
//   ];

//   const checker = (e) => {
//     if (e.target.value === resultado) {
//       setAparecer(true);
//       setMensaje(`Correct it's ${resultado}!`);
//     } else {
//       setMensaje(`Try again :(`);
//     }
//   };

//   const randomPokemonNumber1 = randomNumber();
//   const randomPokemonNumber2 = randomNumber();
//   const randomPokemonNumber3 = randomNumber();
//   const randomPokemonNumber4 = randomNumber();

//   const fetchData = async (randomPokemonNumber, setPokemonData) => {
//     const resultado = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`
//     ).then((res) => res.json());

//     const nombrePokemonCompleto = resultado.species.name;

//     // setImagen1("/pokemon/" + randomPokemonNumber1 + ".png");

//     setPokemonData({
//       pokemonName: nombrePokemonCompleto,
//       pokemonImage: "/pokemon/" + randomPokemonNumber + ".png",
//     });
//   };

//   useEffect(() => {
//     fetchData(randomPokemonNumber1, setPokemonData1);
//     fetchData(randomPokemonNumber2, setPokemonData2);
//     fetchData(randomPokemonNumber3, setPokemonData3);
//     fetchData(randomPokemonNumber4, setPokemonData4);
//   }, []);

//   const picado = () => {
//     shuffle(nombres);
//     setEnseñar(true);
//     // setResultado(pokemonData1.pokemonName);
//     // setImagen1(pokemonData1.pokemonImage);

//     // setResultado(nombres[0]);
//     //
//   };

//   return (
//     <div>
//       <div className="cuadrito">
//         <p>{mensaje}</p>
//       </div>
//       <div className="cuadrito">
//         <button
//           onClick={picado}
//           style={{
//             display: enseñar ? "none" : "block",
//           }}
//         >
//           Play
//         </button>
//       </div>
//       <br />
//       <div className="cuadrito">
//         <img
//           style={{
//             display: enseñar ? "block" : "none",
//             filter: aparecer ? "brightness(100%)" : "brightness(0%)",
//           }}
//           className="pokemon-hidden"
//           src={imagen1}
//         ></img>
//       </div>
//       <div className="cuadrito">
//         <button
//           style={{
//             display: enseñar ? "block" : "none",
//           }}
//           disabled={aparecer}
//           onClick={checker}
//           value={nombres[0]}
//         >
//           {nombres[0]}
//         </button>
//         <button
//           style={{
//             display: enseñar ? "block" : "none",
//           }}
//           disabled={aparecer}
//           onClick={checker}
//           value={nombres[1]}
//         >
//           {nombres[1]}
//         </button>
//         <button
//           style={{
//             display: enseñar ? "block" : "none",
//           }}
//           disabled={aparecer}
//           onClick={checker}
//           value={nombres[2]}
//         >
//           {nombres[2]}
//         </button>
//         <button
//           style={{
//             display: enseñar ? "block" : "none",
//           }}
//           disabled={aparecer}
//           onClick={checker}
//           value={nombres[3]}
//         >
//           {nombres[3]}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PokeWhoseThatPokemon;
