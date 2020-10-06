import React from "react";

// Styles
import './search-form.styles.scss'

const SearchForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
    }

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="search-input"
				placeholder="What do you want to search?"
			/>
            <button className="search-btn">Search</button>
		</form>
	);
};

export default SearchForm;
