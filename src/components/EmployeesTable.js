import React from "react";

function EmployeesTable () {
  return (
    <table className = "employeesTable">
      <thead className = "tableHead">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
    </table>
  )
}

export default EmployeesTable;