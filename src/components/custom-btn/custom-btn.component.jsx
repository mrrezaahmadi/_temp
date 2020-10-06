import React from "react";

// Styles
import "./custom-btn.styles.scss";

const CustomButton = ({ buttonText }) => {
	return <button className="custom-btn">{buttonText}</button>;
};

export default CustomButton;
