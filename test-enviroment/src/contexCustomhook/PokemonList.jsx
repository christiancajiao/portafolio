import { usePokemon } from './PokemonContex
';

function PokemonList() {
  const { pokemonList, loading } = usePokemon();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
