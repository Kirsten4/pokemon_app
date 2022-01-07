import React from "react";

const PokemonTypes = ({selectedPokemon, pokemonDetails}) => {

    return(
        <>
            <h3>hello</h3>
            <h3>{selectedPokemon.name}'s types are {pokemonDetails.types[0].type.name} and {pokemonDetails.types[0].type.name}</h3>
            
        </>
    )
}

export default PokemonTypes;