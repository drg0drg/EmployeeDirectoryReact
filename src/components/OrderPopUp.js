import React from "react";

function OrderPopUp({ orderEmployees }) {
	return (
		<div className="dropdown">
			<button
				className="btn dropdown-toggle border-info"
				type="button"
				id="OrderPopUpButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Order By
			</button>
			<div className="dropdown-menu" aria-labelledby="OrderPopUpButton">
				<button
					className="dropdown-item"
					onClick={() => orderEmployees("id")}>
					Id
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployees("name")}>
					Name
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployees("position")}>
					Position
				</button>
				<button
					className="dropdown-item"
					onClick={() => orderEmployees("email")}>
					Email
				</button>
			</div>
		</div>
	);
}

export default OrderPopUp;
