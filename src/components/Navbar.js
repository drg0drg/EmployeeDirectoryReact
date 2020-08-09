import React from "react";
import SearchField from "../components/SearchField";
import OrderPopUp from "../components/OrderPopUp";
import "../styles/_navbar.scss"

function Navbar({employees, searchUserInput, filterEmployee, orderEmployees}) {
	return (
		<div className="search-menu">
			<div className="search-input">
				<SearchField
					employees={employees}
          searchUserInput={searchUserInput}
          filterEmployee={filterEmployee}
				/>
			</div>
      <div className="search-input">
				<OrderPopUp
					employees={employees}
          orderEmployees={orderEmployees}
				/>
			</div>

		</div>
	);
}

export default Navbar;
