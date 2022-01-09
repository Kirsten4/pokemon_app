import React, {useState, useEffect} from "react";
import PokemonList from "../components/PokemonList";
import PokemonSelector from "../components/PokemonSelector";

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        getPokemons();
    },[])

    useEffect(() => {
        if (selectedPokemon) {
            getPokemonDetails();
        }   
    },[selectedPokemon])

    const getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pokemons => setPokemons(pokemons.results))
    }

    const getPokemonDetails = () => {
        fetch(selectedPokemon.url)
        .then(res => res.json())
        .then(pokemonDetails => setPokemonDetails(pokemonDetails))
    }
    
    const onPokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon)
    }

    const onPokemonSelected = (pokemon) => {
        setSelectedPokemon(pokemon)
    }

    return(
        <>
            <h2>Select a Pokemon</h2>
            <PokemonSelector pokemons={pokemons} onPokemonSelected={onPokemonSelected}/>
            <h3>Pokemon Type: {pokemonDetails ? pokemonDetails.types[0].type.name:null} </h3> 
            
            {/* <PokemonList pokemons={pokemons} onPokemonClick={onPokemonClick}/> */}
            <h2>List of Pokemon</h2>
            <PokemonList pokemons={pokemons} onPokemonClick={onPokemonClick}/>
        </>
    )
}

export default PokemonContainer;