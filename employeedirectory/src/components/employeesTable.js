import React from "react";

function employeesTable () {
  return (
    <table className = "employeesTable">
      <th className = "tableHead">
        <td scope="col">Id</td>
        <td scope="col">Name</td>
        <td scope="col">Position</td>
        <td scope="col">email</td>
        <td scope="col">DOB</td>
      </th>
    </table>
  )
}

export default employeesTable;