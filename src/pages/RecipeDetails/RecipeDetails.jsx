import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { state } = useContext(RecipeContext);

  const foundRecipe = state.allRecipies.find(
    (recipe) => recipe.id === recipeId
  );
  const { image, name, ingredients, cuisine, instructions } = foundRecipe;

  return (
    <div className="recipe-details">
      <img src={image} alt="recipe-pic" />
      <p>{name}</p>
      <p>Cuisine Type: {cuisine}</p>
      <p>Ingredients: {ingredients}</p>
    </div>
  );
};

export default RecipeDetails;
