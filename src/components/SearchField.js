import React from "react";

function SearchField({ searchUserInput }) {
	return (
		<div className="searchInput">
			<input
				className="inputSearch"
				name="search"
				type="text"
				onChange={searchUserInput}
				placeholder="Search"
			/>
		</div>
	);
}

export default SearchField;
