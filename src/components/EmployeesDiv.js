import React, { useState, useEffect } from "react";
// import Employee from "../components/Employee";
import EmployeesTable from "./EmployeesTable";
import EmployeesSeeds from "../employeeSeeds/employeeSeeds.json";
import Navbar from "./Navbar";
import "../styles/_employeesDiv.scss";

function EmployeesDiv() {
	const [employees, setEmployees] = useState(EmployeesSeeds);
	const [search, setSearch] = useState("");

	useEffect(() => {
		filterEmployee(search);
	}, [search]);

	const filterEmployee = (search) => {
		const userInputLowerCase = search.toLowerCase().trim();

		const filteredEmployees = employees.filter((employee) => {
			// Take the employees and pass them to a variable <values>
			const values = Object.values(employee);
			// Loop through these employees values and
			// If one value contains user input (inside userInputLowerCase)
			// return that employee 
			for (let value of values) {
				const valueString = value.toString().toLowerCase();
				if (valueString.includes(userInputLowerCase)) {
					return employee;
				}
			}
		});
		setEmployees(filteredEmployees);
	};

	// initial setting of employees and search criteria
	const searchUserInput = (event) => {
		setEmployees(EmployeesSeeds);// the dummy data in employeeSeeds.json file
		setSearch(event.target.value);// the value that user inputs into search field
	};


	const orderEmployees = (criteria) => {
		// sort the employees alphabetically function of criteria
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
		const orderedEmployees = employees.sort((a, b) =>
		// if a[criteria] > b[criteria] then 1 else do -1
			a[criteria] > b[criteria] ? 1 : -1
		);
		setEmployees([...orderedEmployees]);
	};

	return (
		<div className="employeesDiv">
      <Navbar
				employees={employees}
				filterEmployee={filterEmployee}
				searchUserInput={searchUserInput}
				orderEmployees={orderEmployees}
			/>
			<EmployeesTable employees = {employees} />
		</div>
	);
}

export default EmployeesDiv;
