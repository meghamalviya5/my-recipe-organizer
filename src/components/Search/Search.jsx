import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const Search = () => {
  const { state, dispatch, handleSearch } = useContext(RecipeContext);
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
          //   handleSearch(e);
        }}
        placeholder="Search the item you want"
      />
    </div>
  );
};

export default Search;
