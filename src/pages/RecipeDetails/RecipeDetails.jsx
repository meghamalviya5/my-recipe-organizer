import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { state } = useContext(RecipeContext);

  console.log("recipe id-- ", recipeId);

  const foundRecipe = state.allRecipies.find(
    (recipe) => recipe.id.toString() === recipeId.toString()
  );
  const { image, name, ingredients, cuisine, instructions } = foundRecipe;

  return (
    <div className="recipe-details">
      <h2>Recipe Details</h2>
      <img src={image} alt="recipe-pic" />
      <p>{name}</p>
      <p>Cuisine Type: {cuisine}</p>
      <p>Ingredients: {ingredients}</p>
      <p>Instructions: {instructions}</p>
    </div>
  );
};

export default RecipeDetails;
