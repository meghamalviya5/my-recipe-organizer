import "./App.css";
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import RecipiesList from "./components/RecipiesList/RecipiesList";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe-details/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
