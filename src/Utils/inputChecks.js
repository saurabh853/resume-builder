// Function that returns input validation properties based on input type and name
export const inputChecks = (type, name) => {
  // Common properties for all input types
  const commonProps = {
    required: "*Please fill this field",
  };

  // Switch statement to handle different input types
  switch (type) {
    case "text":
      // For text input type, only common properties are needed
      return commonProps;

    case "email":
      // For email input type, in addition to common properties, add a pattern for email validation
      return {
        ...commonProps,
        pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
      };

    case "number":
      // Function to generate length validation properties for number input type
      const lengthProps = (minLength, maxLength, errorMessage) => ({
        ...commonProps,
        minLength: { value: minLength, message: errorMessage },
        maxLength: { value: maxLength, message: errorMessage },
      });

      // Switch statement to handle different number input names
      switch (name) {
        case "mobile":
          // For mobile number, set specific length properties
          return lengthProps(10, 10, "*Invalid mobile number");

        case "postalCode":
          // For postal code, set specific length properties
          return lengthProps(6, 6, "*Invalid postal code");

        default:
          // For other number inputs, use common properties
          return commonProps;
      }

    default:
      // Default case for unknown input types, use common properties
      return commonProps;
  }
};
