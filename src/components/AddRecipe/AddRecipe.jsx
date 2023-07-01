import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const AddRecipe = () => {
  const { onAddRecipeSubmit } = useContext(RecipeContext);

  return (
    <div>
      <form method="post" onSubmit={onAddRecipeSubmit}>
        <div>Add Recipe</div>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
