import React from "react";
import SearchField from "../components/SearchField";

function Navbar({employees, searchUserInput, filterEmployee}) {
	return (
		<div className="search-menu">
			<div className="search-input">
				<SearchField
					employees={employees}
          searchUserInput={searchUserInput}
          filterEmployee={filterEmployee}
				/>
			</div>
		</div>
	);
}

export default Navbar;
