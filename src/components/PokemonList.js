import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({pokemons, onPokemonClick}) => {
    
    const pokemonItems = pokemons.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} onPokemonClick={onPokemonClick}/>
    })

    return(
        <>
            <ul>
                {pokemonItems}
            </ul>
        </>
    );
};

export default PokemonList;