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
	const [searchValue, setSearchValue] = useState("");
	const [pageIndex, setPageIndex] = useState(0);

	useEffect(() => {
		fetchSearchStartAsync(searchValue, pageIndex);
	}, [searchValue, pageIndex]);

	const handleChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchValue(e.target.value);
	};

	return (
		<div className="home-page">
			<SearchForm
				handleSubmit={handleSubmit}
				handleChangeInput={handleChangeInput}
			/>
			<div className="search-results">
				{isFetching ? (
					[...Array(10)].map((_, i) => <Skeleton key={i} />)
				) : searchValue !== "" && results ? (
					results.map((result, i) => (
						<SearchResult
							key={i}
							link={result.link}
							title={result.title}
							subtitle={result.link}
							textContent={result.snippet}
							thumb={
								result.pagemap &&
								result.pagemap.cse_thumbnail &&
								result.pagemap.cse_thumbnail[0].src
							}
						/>
					))
				) : (
					<span>
						This Programmable Search Engine developed by{" "}
						<strong>Mohammad Reza Ahmadi</strong>
					</span>
				)}
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
