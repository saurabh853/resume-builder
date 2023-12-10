// Importing necessary components and styles from Material-UI and other libraries
import { Button, CircularProgress, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Styles/PreviewComponent.css";
import { connect } from "react-redux";
import { templates } from "../Data/templates";
import JsPDF from "jspdf";
import uniqid from "uniqid";

// Mapping Redux state to component props
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
});

// Mapping Redux actions to component props
const mapDispatchToProps = (dispatch) => ({});

// React component for previewing and saving resumes
const PreviewComponent = (props) => {
  // State variables for managing loading state, resume name, and error messages
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");

  // Function to retrieve the selected template based on template ID
  const getTemplate = (template, index) => {
    if (template.id === props.selectedTemplateId) {
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
        index: index,
      });
      return TemplateComp;
    }
  };

  // console.log(props.initialPersonalInfoState);

  // Function to handle saving the resume
  const handleSave = () => {
    if (resumeName.length === 0) {
      setError("*Please fill this field");
    } else {
      setError("");
      setLoading(true);
      const report = new JsPDF("portrait", "pt", "a4");
      report
        .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
        .then(() => {
          report.save(`${resumeName}.pdf`);
          setLoading(false);
          // Saving the user data in local storage
          let resumes = window.localStorage.getItem("resumes");
          // console.log(resumes);
          if (resumes) {
            let newResumes = JSON.parse(resumes);

            let resumeFound = newResumes.find(
              (resume) => resume.id === props.selectedResumeId
            );
              console.log(resumeFound)
            if (resumeFound) {
              // If the resume is found, update the existing resume
              const allNewResumes = newResumes.map((resume) => {
                if (resume.id === props.selectedResumeId) {
                  return {
                    template_id: props.selectedTemplateId,
                    id: props.selectedResumeId,
                    personalInfo: props.personalInfo,
                    experiences: props.experiences,
                    educationInfo: props.educationInfo,
                    skills: props.skills,
                  };
                } else return resume;
              });
              window.localStorage.setItem("resumes",JSON.stringify(allNewResumes));
              window.location.reload();
              return;
            }

            // If the resume is not found, add a new resume
            newResumes.push({
              template_id: props.selectedTemplateId,
              id: uniqid(),
              personalInfo: props.personalInfo,
              experiences: props.experiences,
              educationInfo: props.educationInfo,
              skills: props.skills,
            });

            window.localStorage.setItem("resumes", JSON.stringify(newResumes));
          } else {
            // If no resumes are in local storage, create a new array with the current resume
            window.localStorage.setItem("resumes",
              JSON.stringify([
                {
                  template_id: props.selectedTemplateId,
                  id: uniqid(),
                  personalInfo: props.personalInfo,
                  experiences: props.experiences,
                  educationInfo: props.educationInfo,
                  skills: props.skills,
                },
              ])
            );
          }

          // Reload the page to reflect the changes
          window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }
  };

  // Function to handle going back to the previous tab
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Render the component
  return (
    <Container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        },
      }}
      className="preview-container">
      <h2 className="preview-header-title">Resume Preview</h2>
      <div className="resume-preview-grid-container">
        <div className="resume-preview-grid-item" id="previewresume">
          {/* Map through templates and render the selected template */}
          {templates?.map((template, index) => {
            return getTemplate(template, index);
          })}
        </div>
        <div className="resume-preview-grid-item">
          <div className="resume-save-container">
            <h3 className="resume-save-title">Create File Name</h3>
            {/* Input field for entering the resume name */}
            <TextField
              value={resumeName}
              onChange={(e) => setResumeName(e?.target?.value)}
              className="resume-name-field"
              sx={{ width: "70%" }}
              id="outlined-basic"
              variant="outlined"
              error={error.length > 0 ? true : false}
              helperText={error}
            />
            {/* Container for back and save buttons */}
            <div className="resume-back-next-container">
              {/* Back button */}
              <Button
                onClick={handleBack}
                className="outlined-btn"
                sx={{ marginRight: "20px" }}
                variant="outlined">
                Back
              </Button>
              {/* Save button, displays loading spinner when saving */}
              {loading ? (
                <CircularProgress size={25} />
              ) : (
                <Button
                  onClick={handleSave}
                  className="contained-btn"
                  variant="contained">
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
