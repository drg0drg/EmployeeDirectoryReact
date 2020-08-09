import React from "react";

function SearchField({ searchUserInput }) {
	return (
		<div className="searchInput">
			<input
				className="inputSearch"
				name="search"
				type="text"
				onChange={searchUserInput}
			/>
		</div>
	);
}

export default SearchField;
