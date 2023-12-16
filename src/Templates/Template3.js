// Importing required components and styles from Material-UI and other local files
import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

// Functional component for Template 2
const Template2 = (props) => {
  // Destructuring props to get data or use default data from 'data.js'
  const personalinfo = props.personalinfo ? props.personalinfo : data.personalinfo;
  const workexperience = props.workexperience ? props.workexperience : data.workexperience;
  const educationinfo = props.educationinfo ? props.educationinfo : data.educationinfo;
  const skills = props.skills ? props.skills : data.skills;

  // Rendering the Template 2 component
  return (
    <Paper
      // Styling using Material-UI's sx prop
      sx={{
        width: {
          xs: "270px",
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
        overflow:'hidden',
      }}
      // Assigning a unique ID to the Paper component
      id={`${props.index}report`}
      // Setting the elevation (shadow) for the Paper component
      elevation={3}
    >
      {/* Header component with personal information and work experience */}
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#1b5e20"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />

      {/* Main content container */}
      <Container>
        {/* Section for Professional Experience */}
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through work experiences and rendering the TemplateOneExperienceComponent */}
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>

        {/* Section for Education */}
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        {/* Rendering the TemplateEducationComponent with education information */}
        <TemplateEducationComponent education={educationinfo} />

        {/* Section for Key Skills */}
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through skills and rendering the TemplateKeySkillComponent */}
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Exporting the Template2 component as the default export
export default Template2;
