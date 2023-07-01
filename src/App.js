import "./App.css";
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import RecipiesList from "./components/RecipiesList/RecipiesList";

function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <Filters />
      </div>
      <h2>All Recipies:</h2>
      <RecipiesList />
    </div>
  );
}

export default App;
