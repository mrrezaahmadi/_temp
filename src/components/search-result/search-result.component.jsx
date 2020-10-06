import React from "react";

// Styles
import "./search-result.styles.scss";

const SearchResult = ({ link, title, subtitle, textContent }) => {
	return (
		<div className="search-result">
			<div className="header">
				<a href={link} target="_blank">
					{title}
				</a>
			</div>
			<div className="subheader">{subtitle}</div>
			<div className="content">
				<div className="thumbnail">content thumbnail</div>
				<div className="text">{textContent}</div>
			</div>
		</div>
	);
};

export default SearchResult;
