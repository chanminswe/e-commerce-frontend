import React from "react";
import "./filterpage.css";
import { useParams } from "react-router-dom";

function FilterPage() {
  const { category } = useParams();

  return <div className="filter-page-container">
    
  </div>;
}

export default FilterPage;
