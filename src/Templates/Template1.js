// Importing necessary components and styles from Material-UI and local files
import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

// Functional component for Template1
const Template1 = (props) => {
  // Destructuring props or using default values from data if props are not provided
  const personalinfo = props.personalinfo ? props.personalinfo : data.personalinfo;
  const workexperience = props.workexperience ? props.workexperience : data.workexperience;
  const educationinfo = props.educationinfo ? props.educationinfo : data.educationinfo;
  const skills = props.skills ? props.skills : data.skills;
  
  // Return statement rendering the component structure
  return (
    // Styling the Paper component with responsive width and height
    <Paper
      sx={{
        width: {
          xs: "250px",
          sm: "370px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
        overflow:'hidden',
      }}
      // Adding an id to the Paper component based on the index prop
      id={`${props.index}report`}
      // Adding elevation to create a shadow effect
      elevation={3}
    >
      {/* TemplateHeader component for personal and work experience information */}
      <TemplateHeader
        primaryColor={"#C98A55"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      {/* Container component for structuring the content */}
      <Container>
        {/* TemplateHeading component for the "Professional Experience" section */}
        <TemplateHeading color={"#C98A55"} title={"Professional Experience"} />
        {/* Mapping through work experience array to render TemplateOneExperienceComponent for each entry */}
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        {/* TemplateHeading component for the "Education" section */}
        <TemplateHeading color={"#C98A55"} title={"Education"} />
        {/* Rendering TemplateEducationComponent for education information */}
        <TemplateEducationComponent education={educationinfo} />
        {/* TemplateHeading component for the "Key Skills" section */}
        <TemplateHeading color={"#C98A55"} title={"Key Skills"} />
        {/* Mapping through skills array to render TemplateKeySkillComponent for each skill */}
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Exporting the Template1 component as the default export
export default Template1;
