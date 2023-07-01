export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTERED_RECIPIES":
      return { ...state, filteredRecipies: action.payload };

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
