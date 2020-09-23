import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log("props", props)
  return (
    <h1> Hello world! </h1>
    // <ul className="list-group search-results">
    //   {props.employee.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="Employee" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>
    // console.log(props)
  );
}

export default SearchResults;