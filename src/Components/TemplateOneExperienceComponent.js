// Importing the Container component from Material-UI
import { Container } from "@mui/system";
// Importing React library
import React from "react";
// Importing the styles for this component
import "../Styles/TemplateOneExperienceComponent.css";

// Functional component for rendering a single experience item in a template
const TemplateOneExperienceComponent = ({ experience }) => {

  return (
    // Using Material-UI Container to wrap the content
    <Container className="template-one-experience-comp">
      {/* List item to structure the content */}
      <li className="template-one-experience-comp">
        {/* Experience details */}
        <h3 className="experience-heading">
          {/* Displaying the job title */}
          {experience?.jobTitle}{" "}
          {/* Displaying the organization name */}
          <span className="experience-org-name">
            {experience?.organizationName}
          </span>
          {/* Displaying the start and end years of the experience */}
          <span className="experience-start-end">
            ({experience?.startYear} - {experience?.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

// Exporting the component as the default export
export default TemplateOneExperienceComponent;
