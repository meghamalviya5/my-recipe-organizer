export const recipeReducer = (state, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "UPDATE_RECIPIES":
      // localStorage.setItem(state.allRecipies, action.payload);
      return {
        ...state,
        filteredRecipies: action.payload,
        allRecipies: action.payload,
      };

    case "ADD_RECIPE":
      localStorage.setItem(
        "allRecipies",
        JSON.stringify([...state.allRecipies, action.payload])
      );
      return {
        ...state,
        allRecipies: [...state.allRecipies, action.payload],
      };

    case "UPDATE_FILTER_TYPE":
      return { ...state, filterType: action.payload };

    case "UPDATE_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };

    case "ADD_MODAL_STATUS":
      return { ...state, addModalStatus: action.payload };
    default:
      return { state };
  }
};
