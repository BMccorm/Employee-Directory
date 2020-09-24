import React from "react";
import "./style.css";
import Search, { searchItem } from "../Search/index"

function SearchResults(props) {
  let filteredEmployee = this.props.employee.filter(
    (result) => {
      result.indexOf(searchItem) !== -1
    });

  return (

    <table className="table mx-4 ">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>

        </tr>
      </thead>
      <tbody>
        {
          filteredEmployee.map(result =>
            <tr key={result}>
              <td><img alt="Employee" src={result.picture.medium} className="img-fluid" /></td>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>{result.phone}</td>

            </tr>)}
      </tbody>
    </table>

  );
}

export default SearchResults;
