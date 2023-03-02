import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PokedexGame from "./Pages/PokemonGames/PokedexGame/PokedexGame";

import "./App.css";
import PokemonComparison from "./Pages/PokemonGames/PokemonComparison/PokemonComparison";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokedexGame />} />
          <Route path="PokemonComparison" element={<PokemonComparison />} />
          <Route path="*" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
