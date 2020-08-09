import React from "react";
import Employee from "../components/Employee";
import "../styles/_employeesTable.scss";



function EmployeesTable ({employees}) {
  return (
    <table className = "employeesTable">
      <thead className = "tableHead">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
				{employees.map((employee) => (
					<Employee
						id={employee.id}
						key={employee.id}
						name={employee.name}
						position={employee.position}
						email={employee.email}
						dob={employee.dob}
					/>
				))}
			</tbody>

    </table>
  )
}

export default EmployeesTable;