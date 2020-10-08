import React from "react";

// Styles
import "./custom-btn.styles.scss";

const CustomButton = ({ buttonText, index, handleClick }) => {
	return (
		<button onClick={() => handleClick(index)} className="custom-btn">
			{buttonText}
		</button>
	);
};

export default CustomButton;
