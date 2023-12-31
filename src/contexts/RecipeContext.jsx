import { v4 as uuid } from "uuid";
import { createContext, useEffect, useReducer } from "react";
import { recipeReducer } from "../reducers/RecipeReducer";
import { recipies } from "../db/recipes";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const initialState = {
    allRecipies: recipies,
    filteredRecipies: recipies,
    searchValue: "",
    filterType: "name",
    addModalStatus: false,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  console.log("in context");

  useEffect(() => {
    const retainedRecipies = localStorage.getItem("allRecipies");
    if (retainedRecipies) {
      dispatch({
        type: "UPDATE_RECIPIES",
        payload: JSON.parse(retainedRecipies),
      });
    } else {
      dispatch({ type: "UPDATE_RECIPIES", payload: recipies });
    }
  }, []);
  const handleFilterChange = (e) => {
    dispatch({ type: "UPDATE_FILTER_TYPE", payload: e.target.value });
  };

  if (state.filterType) {
    let foundRecipies = [];
    if (state.filterType === "name") {
      foundRecipies = state.allRecipies.filter((recipe) =>
        recipe.name.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    } else if (state.filterType === "ingredients") {
      foundRecipies = state.allRecipies.filter((recipe) =>
        recipe.ingredients
          .toString()
          .toLowerCase()
          .includes(state.searchValue.toLowerCase())
      );
    } else if (state.filterType === "cuisine") {
      foundRecipies = state.allRecipies.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    }
    state.filteredRecipies = foundRecipies;
    // dispatch({ type: "UPDATE_FILTERED_RECIPIES", payload: foundRecipies });
  }

  const handleDelete = (recipeId) => {
    const updatedRecipies = state.filteredRecipies.filter(
      (recipe) => recipe.id !== recipeId
    );
    dispatch({ type: "UPDATE_RECIPIES", payload: updatedRecipies });
  };

  const onAddRecipeSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("name"), " ---form data");
    const newRecipe = {
      id: uuid(),
      name: data.get("name"),
      image: data.get("image"),
      cuisine: data.get("cuisine"),
      ingredients: data.get("ingredients"),
      instructions: data.get("instructions"),
    };
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
  };

  const valueProp = {
    state,
    dispatch,
    handleFilterChange,
    handleDelete,
    onAddRecipeSubmit,
  };

  return (
    <RecipeContext.Provider value={valueProp}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
