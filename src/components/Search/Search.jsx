import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const Search = () => {
  const { state, dispatch } = useContext(RecipeContext);
  return (
    <div>
      <input
        type="search"
        value={state.searchValue}
        onChange={async (e) => {
          await dispatch({
            type: "UPDATE_SEARCH_VALUE",
            payload: e.target.value,
          });
        }}
        placeholder="Search the item you want"
      />
    </div>
  );
};

export default Search;
