// Import necessary dependencies from React and other libraries
import React from "react";
import Navbar from "../Components/Common/Navbar";
import "../Styles/Home.css";
import { templates } from "../Data/templates";
import BlackScreen from "../Components/BlackScreen";
import { Button, Stack } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate,clearAllData } from "../Redux/actions";

// Define mapStateToProps to map the state to component props
const mapStateToProps = (state) => ({
  selectedTemplateId: state?.selectedTemplateReducer?.selectedTemplateId,
  selectedResumeId: state?.selectedTemplateReducer?.selectedResumeId,
  personalInfo: state?.personalInfoReducer?.personalInfo,
  experiences: state?.workExperienceReducer?.experiences,
  educationInfo: state?.educationDetailsReducer?.educationInfo,
  skills: state?.keySkillsReducer?.skills,
});

// Define mapDispatchToProps to map dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  clearAllUserData: () => dispatch(clearAllData()),
});

// Define the functional component 'Home'
const Home = (props) => {
  // Initialize the useNavigate hook to handle navigation
  const navigate = useNavigate();

  // Function to navigate to the "fill-details" page with the selected template id
  const navigateToFillDetails = (id) => {
    props.setSelectedTemplateId(id);
    props.clearAllUserData();
    navigate("/template/fill-details");
  };

  // Render the component
  return (
    <>
      {/* Render the Navbar component with the active prop set to "Resume Templates" */}
      <Navbar active={"Resume Templates"} />
      
      {/* Render the main content of the Home component */}
      <>
        <div className="home">
          <div className="home-templates-cont">
            {/* Header and description for the template section */}
            <h2 className="template-header-title">Templates</h2>
            <p className="template-select-text">Select a template to get started</p>
            
            {/* Stack component for responsive grid layout */}
            <Stack
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: {
                  sm: "1fr 1fr",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 0.3fr",
                  xl: "1fr 1fr 1fr 1fr",
                },
                gridGap: "30px",
              }}>

              {/* Map through the templates and render template images with buttons */}
              {templates?.map((template, index) => {
                return (
                  <div key={template.id} id={'template_'+(parseInt(index)+1)} className="templates-img-cont">
                    {/* Template image */}
                    <img
                      className="template-img"
                      src={template.template_img}
                      alt={template.template_name}
                    />
                    {/* Black screen overlay */}
                    <BlackScreen />
                    {/* Use Template button */}
                    <Button
                      className="use-template-btn"
                      onClick={() => navigateToFillDetails(template.id)}
                      size="medium"
                      variant="contained">
                      Use Template
                    </Button>
                  </div>
                );
              })}
            </Stack>
          </div>
        </div>
      </>
    </>
  );
};

// Connect the component to the Redux store using mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Home);
