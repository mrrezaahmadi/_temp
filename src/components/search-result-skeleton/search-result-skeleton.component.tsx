import React from "react";

// Styles
import "./search-result-skeleton.styles.scss";

const Skeleton = () => {
	return (
		<div className="search-result-skeleton">
			<div className="skeleton-header"></div>
			<div className="skeleton-subheader"></div>
			<div className="skeleton-content">
				<div className="skeleton-content-thumb"></div>
				<div className="skeleton-content-text">
					{[...Array(6)].map((_, i) => (
						<div className="text-lines" key={i}></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skeleton;
