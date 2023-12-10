// Import React library for creating React components
import React from "react";

// Importing the CSS file for styling
import "../Styles/TemplateHeading.css";

// Functional component named TemplateHeading that takes 'props' as its argument
const TemplateHeading = (props) => {
  // Render the component with JSX
  return (
    <div>
      {/* Heading element with style for text color based on props.color */}
      <h2
        style={{ color: props?.color }}
        className="professional-experience-heading">
        {/* Display the title passed as a prop */}
        {props.title}
      </h2>
      {/* Horizontal line (hr) element with style for background color based on props.color */}
      <hr style={{ backgroundColor: props?.color }} className="vertical-line" />
    </div>
  );
};

// Export the TemplateHeading component as the default export
export default TemplateHeading;
