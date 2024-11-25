import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Failed to fetch Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};
