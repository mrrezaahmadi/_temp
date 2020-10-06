import React from "react";

// Styles
import "./search-result.styles.scss";

const SearchResult = ({ link, title, subtitle, textContent, thumb }) => {
	return (
		<div className="search-result">
			<div className="header">
				<a href={link} target="_blank">
					{title}
				</a>
			</div>
			<div className="subheader">{subtitle.substr(0, 80)}</div>
			<div className="content">
				{thumb ? (
					<img
						style={{ border: "none" }}
						className="thumbnail"
						alt="thumbnail"
						src={thumb}
					/>
				) : (
					<div className="thumbnail">content thumbnail</div>
				)}
				<div className="text">{textContent.substr(0, 350)}</div>
			</div>
		</div>
	);
};

export default SearchResult;
