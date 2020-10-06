import React from "react";

// Styles
import "./home-page.styles.scss";

// Components
import SearchForm from "../../components/search-form/search-form.component";
import SearchResult from "../../components/search-result/search-result.component";

const HomePage = () => {
	return (
		<div className="home-page">
			<SearchForm />
			<div className="search-results">
				{[...Array(10)].map((_, i) => (
					<SearchResult key={i} />
				))}
			</div>
			<div className="navigation-btns">
				<div className="prev-page-btn"></div>
				<div className="next-page-btn"></div>
			</div>
		</div>
	);
};

export default HomePage;
