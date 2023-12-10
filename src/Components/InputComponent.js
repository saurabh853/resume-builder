// Importing necessary components and styles
import React from "react";
import { TextField } from "@mui/material";
import "../Styles/InputComponent.css";
import { inputChecks } from "../Utils/inputChecks";


// Functional component for input fields
const InputComponent = ({ title, type, name, register, multiline, rows, value, error, errorMessage, setValue }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value.toString());
  };

  InputComponent.defaultProps = {
    multiline: false,
    rows: 1,
    error: false,
    errorMessage: "",
  };
  return (
    // Container for the input component
    <div className="input-component">
      {/* Displaying the input title */}
      <p className="input-title">{title}</p>
      
      {/* Textfield component for user input */}
      <TextField
        variant="outlined"
        type={type}
        name={name}
        
        // Using react-hook-form's register function with inputChecks for validation
        {...register(name, inputChecks(type, name))}
        
        // Allowing multiple lines for textareas if 'multiline' prop is true
        multiline={multiline}
        {...(multiline && { rows: 5 })}
        
        // Handling input value and updating it through props
        value={value}
        onChange={handleInputChange}
        
        // Displaying error state and custom error message if present
        error={error}
        helperText={errorMessage || null}
      />
    </div>
  );
};

// Exporting the InputComponent for use in other components
export default InputComponent;
