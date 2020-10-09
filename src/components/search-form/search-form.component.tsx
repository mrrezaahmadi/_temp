import React from "react";

// Styles
import "./search-form.styles.scss";

// Interfaces
interface SearchFromProps {
	handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFromProps> = ({
	handleChangeInput,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="search-input"
				placeholder="What do you want to search?"
				onChange={handleChangeInput}
			/>
			<button type="submit" className="search-btn">
				Search
			</button>
		</form>
	);
};

export default SearchForm;
