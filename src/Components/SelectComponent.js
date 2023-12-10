// Importing necessary components from Material-UI and React
import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles/SelectComponent.css";

// Functional component for a custom Select component
const SelectComponent = ({ title, error, errorMessage, children }) => {
  return (
    // Container div with a custom class
    <div className="select-component">
      {/* Displaying the title passed as a prop */}
      <p className="select-title">{title}</p>

      {/* Using Material-UI's FormControl to control the form element */}
      <FormControl fullWidth error={error}>
        {/* Rendering child components passed as props */}
        {children}

        {/* Displaying error message using Material-UI's FormHelperText */}
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

// Exporting the SelectComponent for use in other parts of the application
export default SelectComponent;
