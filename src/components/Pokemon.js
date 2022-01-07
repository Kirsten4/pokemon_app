import React from "react";

const Pokemon = ({pokemon, onPokemonClick}) => {
    
    const handleClick = () => {
        onPokemonClick(pokemon)
    }

    return(
        <>
            <li onClick={handleClick}>{pokemon.name}</li>
            
        </>
    )
}

export default Pokemon;