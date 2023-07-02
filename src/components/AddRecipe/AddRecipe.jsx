import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const AddRecipe = () => {
  const { onAddRecipeSubmit, dispatch } = useContext(RecipeContext);

  return (
    <div>
      <form
        method="post"
        onSubmit={(e) => {
          onAddRecipeSubmit(e);
          dispatch({ type: "ADD_MODAL_STATUS", payload: false });
        }}
      >
        <div>Add Recipe</div>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="image">Image Url: </label>
          <input id="image" type="text" name="image" />
        </div>
        <div>
          <label htmlFor="cuisine">Cuisine: </label>
          <input id="cuisine" type="text" name="cuisine" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <input id="ingredients" type="text" name="ingredients" />
        </div>
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <input id="instructions" type="text" name="instructions" />
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
        <button
          type="button"
          className="btn-close"
          onClick={() => dispatch({ type: "ADD_MODAL_STATUS", payload: false })}
        >
          X
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
