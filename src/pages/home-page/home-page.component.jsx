import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Styles
import "./home-page.styles.scss";

// Components
import SearchForm from "../../components/search-form/search-form.component";
import SearchResult from "../../components/search-result/search-result.component";
import CustomButton from "../../components/custom-btn/custom-btn.component";
import Skeleton from "../../components/search-result-skeleton/search-result-skeleton.component";

// Redux actions
import { fetchSearchStartAsync } from "../../redux/results/results.thunk";

const HomePage = ({ isFetching, results, fetchSearchStartAsync }) => {
	const [searchValue, setSearchValue] = useState("apple");
	const [pageIndex, setPageIndex] = useState(0);

	useEffect(() => {
		fetchSearchStartAsync(searchValue, pageIndex);
	}, [searchValue, pageIndex]);

	return (
		<div className="home-page">
			<SearchForm />
			<div className="search-results">
				{isFetching
					? [...Array(10)].map((_, i) => <Skeleton key={i} />)
					: results.map((result, i) => (
							<SearchResult
								key={i}
								link={result.link}
								title={result.title}
								subtitle={result.link}
								textContent={result.snippet}
							/>
					  ))}
			</div>
			<div className="navigation-btns">
				<CustomButton buttonText={"Previous Page"} />
				<CustomButton buttonText={"Next Page"} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	results: state.results.resultItems,
	isFetching: state.results.isFetching,
});

export default connect(mapStateToProps, { fetchSearchStartAsync })(HomePage);
