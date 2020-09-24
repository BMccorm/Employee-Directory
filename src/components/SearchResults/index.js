import React from "react";
import "./style.css";

function SearchResults(props) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>

        </tr>
      </thead>
      <tbody>
        {props.employee.map(result =>
          <tr key={result}>
            <td><img alt="Employee" src={result.picture.medium} className="img-fluid" /></td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>

          </tr>)}
      </tbody>
    </table>

  );
}

{/* // <ul className="list-group search-results">
    //   {props.employee.map(result => (
    //     <ul key={result} className="list-group-item">
    //       <li>{result.name.first}</li>
    //       <li>{result.name.last}</li>
    //       <li>{result.email}</li>
    //       <img alt="Employee" src={result.picture.medium} className="img-fluid" />
    //     </ul>
    //   ))}
    // </ul> */}



export default SearchResults;


{/* <table className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Photo</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td>{result.name.first}</td>
      <td>{result.name.last}</td>
      <td>{result.email}</td>
    </tr>
</table> */}
