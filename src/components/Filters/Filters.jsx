import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const Filters = () => {
  const { handleFilterChange } = useContext(RecipeContext);
  return (
    <div>
      <label htmlFor="name">
        <input
          type="radio"
          name="search-type"
          value="name"
          onChange={handleFilterChange}
          defaultChecked
        />{" "}
        Name
      </label>
      <label htmlFor="ingredients">
        <input
          type="radio"
          id="ingredients"
          name="search-type"
          value="ingredients"
          onChange={handleFilterChange}
        />{" "}
        Ingredients
      </label>
      <label htmlFor="cuisine">
        <input
          type="radio"
          id="cuisine"
          name="search-type"
          value="cuisine"
          onChange={handleFilterChange}
        />{" "}
        Cuisine
      </label>
    </div>
  );
};

export default Filters;
