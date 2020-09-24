import React from "react";
import "./style.css";

function SearchResults(props) {

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
        {props.employee.map(result =>
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
