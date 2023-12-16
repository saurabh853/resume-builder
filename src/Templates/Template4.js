// Importing necessary components and styles from Material-UI and other files
import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css"; // Importing styles
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data"; // Importing data
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

// Functional component for Template2
const Template2 = (props) => {
  // Destructuring props and providing default values from 'data' if not provided
  const personalinfo = props.personalinfo ? props.personalinfo : data.personalinfo;
  const workexperience = props.workexperience ? props.workexperience : data.workexperience;
  const educationinfo = props.educationinfo ? props.educationinfo : data.educationinfo;
  const skills = props.skills ? props.skills : data.skills;

  return (
    // Paper component with styles and unique id
    <Paper
      sx={{
        width: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "auto",
          xl: "600px",
        },
        height: {
          xs: "auto",
          sm: "auto",
          md: "auto",
          lg: "auto",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}
    >
      {/* TemplateHeader component with specific props */}
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#2196f3"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      {/* Container component for the main content */}
      <Container>
        {/* Section for Professional Experience */}
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through work experience data and rendering TemplateOneExperienceComponent */}
          {workexperience.map((experience, index) => {
            return <TemplateOneExperienceComponent key={index} experience={experience} />;
          })}
        </ul>
        {/* Section for Education */}
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        {/* Rendering TemplateEducationComponent with education data */}
        <TemplateEducationComponent education={educationinfo} />
        {/* Section for Key Skills */}
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through skills data and rendering TemplateKeySkillComponent */}
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Exporting Template2 component as the default export
export default Template2;
