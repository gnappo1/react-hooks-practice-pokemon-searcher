import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  const renderPokeCards = () => pokemons.map(poke => <PokemonCard key={poke.id} pokemon={poke} />)
  
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokeCards()}
    </Card.Group>
  );
}

export default PokemonCollection;
