import React from "react";
import Search from "../../components/Search/Search";
import Filters from "../../components/Filters/Filters";
import RecipiesList from "../../components/RecipiesList/RecipiesList";

const Home = () => {
  return (
    <div>
      <div>
        <Search />
        <Filters />
      </div>
      <h2>All Recipies:</h2>
      <RecipiesList />
    </div>
  );
};

export default Home;
