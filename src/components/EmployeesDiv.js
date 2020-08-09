import React, { useState, useEffect } from "react";
import Employee from "../components/Employee";
import EmployeesTable from './EmployeesTable';
import EmployeesSeeds from '../employeeSeeds/employeeSeeds.json'

function EmployeesDiv() {
	const [employees, setEmployees] = useState(EmployeesSeeds);
	return (
		<div>
      <Employee/>
			<EmployeesTable employees = {employees} />
		</div>
	);
}

export default EmployeesDiv;
