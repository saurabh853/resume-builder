// Importing necessary components and styles from external dependencies and files
import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

// Functional component named Template2 with props as its parameter
const Template2 = (props) => {
  // Destructuring props and providing default values if they are not passed
  const personalinfo = props.personalinfo ? props.personalinfo : data.personalinfo;
  const workexperience = props.workexperience ? props.workexperience : data.workexperience;
  const educationinfo = props.educationinfo ? props.educationinfo : data.educationinfo;
  const skills = props.skills ? props.skills : data.skills;

  // Return statement containing JSX structure for the Template2 component
  return (
    <Paper
      sx={{
        // Styling for the Paper component using the sx prop
        width: {
          xs: "350px",
          sm: "400px",
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
      }}
      id={`${props.index}report`}
      elevation={3} // Elevation property for the Paper component
    >
      {/* TemplateHeader component with various props */}
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      {/* Container component from MUI */}
      <Container>
        {/* TemplateHeading component for "Professional Experience" */}
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping over workexperience array to render TemplateOneExperienceComponent for each item */}
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        {/* TemplateHeading component for "Education" */}
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        {/* Rendering TemplateEducationComponent with educationinfo prop */}
        <TemplateEducationComponent education={educationinfo} />
        {/* TemplateHeading component for "Key Skills" */}
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping over skills array to render TemplateKeySkillComponent for each item */}
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Exporting the Template2 component as the default export of this module
export default Template2;
