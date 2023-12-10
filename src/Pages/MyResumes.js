// Importing necessary dependencies and components from React, Material-UI, and other libraries.
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/MyResumes.css";
import { Button } from "@mui/material";
import BlackScreen from "../Components/BlackScreen";
import { templates } from "../Data/templates";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import JsPDF from "jspdf";
import { connect } from "react-redux";
import {
  addAllExperience,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectResume,
  selectTemplate,
} from "../Redux/actions";
import { useNavigate } from "react-router-dom";

// Styling for the Material-UI Paper component using the styled utility.
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Mapping Redux state to component props.
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// Mapping Redux actions to component props.
const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

// MyResumes functional component.
const MyResumes = (props) => {
  // State to manage the list of resumes.
  const [resumes, setResumes] = useState([]);

  // useEffect hook to load resumes from localStorage when the component mounts.
  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  // useNavigate hook for programmatic navigation.
  const navigate = useNavigate();

  // Function to get the template based on the selected resume.
  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
    
    // Creating a clone of the template with updated props.
    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  // Function to delete a selected resume.
  const deleteResume = (resume) => {
    let resumes = window.localStorage.getItem("resumes");

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((eachResume) => {
      return eachResume.id !== resume.id;
    });

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    setResumes(newSetOfResumes);
  };

  // Function to download the selected resume as a PDF.
  const downloadResume = (id) => {
    // console.log(id);
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
      // // console.log(resumes)
    });
  };

   // Function to set user data from the selected resume.
  const setUserData = (resume) => {
    props.onAddPersonalInfo(resume.personalInfo);
    props.setAllExperience(resume.experiences);
    props.onAddEducation(resume.educationInfo);
    props.onEditSkill(resume.skills);
  };

  // Function to navigate to the template filling details page.
  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  // Rendering the component.
  return (
    <>
      {/* Navbar component to display navigation links */}
      <Navbar active={"My Resumes"} />

      {/* Main container for My Resumes page */}
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          {/* Grid container for displaying resumes */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="grid">
             {/* Checking if there are resumes to display */}
            {resumes.length >= 1 ? (
              // Mapping through the list of resumes and displaying each one
              resumes.map((resume, index) => {
                return (
                  <Grid
                    item
                    className={`resume `}
                    id={`${index}resume`}
                    margin={2}
                    key={index}>
                    <Item id={`${index}ITEM`}>
                      {getTemplate(resume, index)}

                      {/* BlackScreen component */}
                      <BlackScreen />

                      {/* Buttons for downloading, deleting, and editing the resume */}
                      <div className="use-template-btn-cont">
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            downloadResume(index);
                          }}
                          size="medium"
                          variant="contained">
                          Download
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            deleteResume(resume);
                          }}
                          size="medium"
                          variant="contained">
                          Delete
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => navigateToFillDetails(resume)}
                          size="medium"
                          variant="contained">
                          Edit Template
                        </Button>
                      </div>
                    </Item>
                  </Grid>
                );
              })
            ) : (
              // Displaying a message if there are no resumes
              <div className="no-resumes-container">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p className="no-resumes-text">
                  You do not have any Resumes yet. Make One to view it here.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

// Connecting the component to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);
