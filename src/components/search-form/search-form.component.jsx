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
                type="text"
				className="search-input"
				placeholder="What do you want to search?"
			/>
            <button type="submit" className="search-btn">Search</button>
		</form>
	);
};

export default SearchForm;
