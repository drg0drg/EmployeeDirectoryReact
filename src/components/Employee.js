import React from "react";

function Employee({ id, name, position, email, dob }) {
	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{name}</td>
			<td>{position}</td>
			<td>{email}</td>
			<td>{dob}</td>
		</tr>
	);
}

export default Employee;
