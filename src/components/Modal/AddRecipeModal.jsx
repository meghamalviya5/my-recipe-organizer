import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import AddRecipe from "../AddRecipe/AddRecipe";
import { RecipeContext } from "../../contexts/RecipeContext";

const AddRecipeModal = () => {
  const addRecipeModalRef = useRef();
  const { dispatch } = useContext(RecipeContext);

  const closeAddRecipeModal = (e) => {
    if (e.target === addRecipeModalRef.current) {
      dispatch({ type: "ADD_MODAL_STATUS", payload: false });
    }
  };

  return ReactDom.createPortal(
    <div
      className="container"
      ref={addRecipeModalRef}
      onClick={closeAddRecipeModal}
    >
      <div className="add-recipe-modal">
        <AddRecipe />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default AddRecipeModal;
