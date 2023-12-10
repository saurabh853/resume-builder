// Import React library for creating React components
import React from "react";

// Importing the CSS file for styling
import "../Styles/TemplateEducationComponent.css";

// Functional component for displaying education details
const TemplateEducationComponent = (props) => {
  return (
    // Heading 3 element with a class for styling
    <h3 className="template-education-details">
      {/* University name */}
      <span className="template-education-university">
        {props?.education?.university}
      </span>
      
      {/* Displaying the start and end years of education */}
      <span className="education-start-end">
        ({props?.education?.startYear} - {props?.education?.endYear})
      </span>
    </h3>
  );
};

// Exporting the component to be used in other parts of the application
export default TemplateEducationComponent;
