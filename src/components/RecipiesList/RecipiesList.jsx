import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { RecipeContext } from "../../contexts/RecipeContext";
import "./RecipiesList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import AddRecipeModal from "../Modal/AddRecipeModal";

const RecipiesList = () => {
  const { state, dispatch, handleDelete } = useContext(RecipeContext);

  console.log("state in recipieslist: ", state);

  return (
    <div className="recipies">
      {state.filteredRecipies.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt="food-pic" />
          <h3>{recipe.name}</h3>
          Cuisine Type: <p>{recipe.cuisine}</p>
          <p>
            Ingredients:{" "}
            <Link to={`recipe-details/${recipe.id}`}>See More</Link>
          </p>
          <p>
            {" "}
            Instructions:{" "}
            <Link to={`recipe-details/${recipe.id}`}>See More</Link>
          </p>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
      <div>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="add-icon"
          onClick={() => dispatch({ type: "ADD_MODAL_STATUS", payload: true })}
        />
        {/* / <p>Add recipe</p> */}
      </div>
      {state.addModalStatus ? <AddRecipeModal /> : null}
    </div>
  );
};

export default RecipiesList;
