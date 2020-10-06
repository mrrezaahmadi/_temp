import React from "react";

// Styles
import "./home-page.styles.scss";

// Components
import SearchForm from "../../components/search-form/search-form.component";
import SearchResult from "../../components/search-result/search-result.component";
import CustomButton from '../../components/custom-btn/custom-btn.component'

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
				<CustomButton buttonText={"Previous Page"}/>
				<CustomButton buttonText={"Next Page"} />
			</div>
		</div>
	);
};

export default HomePage;
