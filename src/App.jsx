import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonsList from "./pages/PokemonsList";
import PokemonDetail from "./pages/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  //Home
  //pokemons
  //pokemon-detail

  return (
    <HashRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
               
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokemonsList/>} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} />
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;