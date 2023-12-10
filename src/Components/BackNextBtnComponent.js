import React from "react";
import { Button, CircularProgress } from "@mui/material";
import "../Styles/BackNextBtnComponent.css";

const BackNextBtnComponent = ({ tab, onBack, loading, backTitle, nextTitle }) => {
  // Container div with a specific class for styling
  return (
    <div className="back-next-btn-cont">
      {/* Conditionally rendering Back button only if the current tab is not the first tab (tab index 0) */}
      {tab !== 0 && (
        <Button
          onClick={onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined"
        >
          {backTitle}
        </Button>
      )}

      {/* Conditional rendering of a loading spinner or the Next button */}
      {loading ? (
        // Displaying a circular loading spinner if the loading prop is true
        <CircularProgress size={25} />
      ) : (
        // Displaying a submit button if the loading prop is false
        <Button type="submit" className="contained-btn" variant="contained">
          {nextTitle}
        </Button>
      )}
    </div>
  );
};

export default BackNextBtnComponent;
