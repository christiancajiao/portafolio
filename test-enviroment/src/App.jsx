import ItemList from './ItemList';
import './App.css';
import DynamicForm from './form/DynamicForm';
import { PokemonProvider } from './contexCustomhook/PokemonContex';
import PokemonList from './contexCustomhook/PokemonList';



function App() {
  return (
    <PokemonProvider className="App">
      <h1>Item List with Search and Sort</h1>
      <ItemList />
      <DynamicForm />
      <PokemonList />
    </PokemonProvider>
  );
}

export default App;