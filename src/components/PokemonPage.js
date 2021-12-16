import {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  
  const handleNewPoke = (newPoke) => {
    setPokemons(currentPokemonsList => [...currentPokemonsList, newPoke])
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/pokemon")
      const data = await response.json()
      setPokemons(data) 
    } catch(error) {
      alert(error)
    }
    
  }

  useEffect(() => {
    fetchData()    
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke} />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
