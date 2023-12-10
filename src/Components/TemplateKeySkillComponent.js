// Importing the Container component from Material-UI
import { Container } from "@mui/system";

// Importing React library
import React from "react";

// Importing the CSS file for styling
import "../Styles/TemplateKeySkillComponent.css";

// Functional component for displaying a key skill in a list
const TemplateKeySkillComponent = (props) => {
  return (
    // Using Material-UI Container for layout consistency
    <Container>
      {/* List item to display the skill passed as a prop */}
      <li className="skill">{props?.skill}</li>
    </Container>
  );
};

// Exporting the component as the default export
export default TemplateKeySkillComponent;
