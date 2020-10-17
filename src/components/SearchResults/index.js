import React, { useState } from "react";
import "./style.css";

function SearchResults(props) {
  const [ascending, setAscending] = useState(true)

  let filteredEmployee = props.employee.length ? props.employee.sort(compareFunction).filter((result) => {
    if (!props.search) {
      return result
    } else if (result.name.first.toLowerCase().includes(props.search.toLowerCase())) { return result }
  }) : []
  // sorts first name by ascending and decending 
  function compareFunction(a, b) {
    if (ascending) {
      if (a.name.first < b.name.first) { return -1 }
      if (a.name.first > b.name.first) { return 1 }
      return 0
    } else {
      if (a.name.first < b.name.first) { return 1 }
      if (a.name.first > b.name.first) { return -1 }
      return 0
    }
  }

  function handleOnClick() {
    ascending ? setAscending(false) : setAscending(true)
  }

  return (

    <table className="table mx-4 ">
      <thead>
        <tr>
          <th fieldname="picture.medium" scope="col">Photo</th>
          <th fieldname="name.first" onClick={handleOnClick} scope="col">First</th>
          <th fieldname="name.last" onClick={handleOnClick} scope="col">Last</th>
          <th fieldname="email" scope="col">Email</th>
          <th fieldname="phone" scope="col">Phone Number</th>

        </tr>
      </thead>
      <tbody>
        {
          filteredEmployee.map((result, i) =>
            <tr key={i}>
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

