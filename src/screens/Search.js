import React from "react";
import SearchPage from "../components/SearchPage";
import Sidebar from "../components/Sidebar";
import "./Main.css";

function Search() {
  return (
    <div>
      <div className="app__page">
        <Sidebar />
        <SearchPage />
      </div>
    </div>
  );
}

export default Search;
