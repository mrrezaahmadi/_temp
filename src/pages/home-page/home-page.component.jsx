import React from "react";

// Styles
import "./home-page.styles.scss";

// Components
import SearchForm from "../../components/search-form/search-form.component";

const HomePage = () => {
	return (
		<div className="home-page">
			{/* Search Section */}
			<SearchForm />
			<div className="search-results">
				{/* Here goes the search result items */}
				<div className="search-result"></div>
				<div className="search-result"></div>
				<div className="search-result"></div>
			</div>
			<div className="navigation-btns">
				<div className="prev-page-btn"></div>
				<div className="next-page-btn"></div>
			</div>
		</div>
	);
};

export default HomePage;
