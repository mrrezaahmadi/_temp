import React from "react";

// Styles
import "./custom-btn.styles.scss";

interface CustomButtonProps {
	buttonText: string;
	index: number;
	handleClick: (index: number) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	buttonText,
	index,
	handleClick,
}) => {
	return (
		<button onClick={() => handleClick(index)} className="custom-btn">
			{buttonText}
		</button>
	);
};

export default CustomButton;
