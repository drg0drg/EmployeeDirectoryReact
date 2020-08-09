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