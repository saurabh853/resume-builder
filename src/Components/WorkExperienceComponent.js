import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import React, { useState } from "react";
import "../Styles/WorkExperienceComponent.css";
import { connect } from "react-redux";
import BackNextBtn from "./BackNextBtn";
import { addAllExperience, addExperience } from "../Redux/actions";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

// Map state to props to access the experiences from the Redux store
const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

// Map dispatch to props to dispatch actions to update the Redux store
const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

// List of years for the Select components
const years = [
  "Present", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016",
  "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007",
  "2006", "2005", "2004", "2003", "2002", "2001", "2000",
];

// WorkExperienceComponent functional component
const WorkExperienceComponent = (props) => {
  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Destructuring React Hook Form methods
  const { register, handleSubmit, control, formState: { errors } } = useForm();


  // Handler for moving to the previous tab
  const handleBack = () => props?.setTab((prevTab) => prevTab - 1);

  // Handler for moving to the next tab
  const handleNext = (data) => {
    setLoading(true);

    // Extracting data for two experiences from the form
    let experienceOne = {};
    let experienceTwo = {};

    for (const index in data) {
      const targetExperience = index.includes("1") ? experienceOne : experienceTwo;
      targetExperience[index.slice(0, index.length - 1)] = data[index];
    }
     // Updating Redux store with the collected experiences
    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
      ]);
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    // Simulating a delay for loading and moving to the next tab
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // Handler for adding a new experience
  const addNewExperience = () => {
    props?.setExperience({
      id: props?.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };

  // Handlers for editing job title and organization name for an experience
  const editJobTitleExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, jobTitle: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  const editOrganisationNameExperience = (value, id) => {
    const newExperiences = props?.experiences.map((experience) => {
      if (experience?.id === id) {
        return { ...experience, organizationName: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  // Rendering the component
  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">Work Experience</h2>
      <form onSubmit={handleSubmit(handleNext)}>
        {/* Mapping through each experience in the Redux store */}
        {props?.experiences.map((experience) => {
          return (
            <div key={experience?.id} className="experience-cont">
              <h3 className="experience-heading">Experience {experience?.id}</h3>
              <Divider sx={{ margin: "5px 0px" }} />
              <div className="experience-form-cont">
                {/* Input component for job title */}
                <InputComponent
                  title={"Job Title"}
                  type={"text"}
                  name={"jobTitle" + experience?.id}
                  register={register}
                  multiline={false}
                  value={experience.jobTitle}
                  setValue={(value) =>
                    editJobTitleExperience(value, experience?.id)
                  }
                  error={Boolean(errors[`jobTitle${experience?.id}`])}
                  errorMessage={
                    errors[`jobTitle${experience?.id}`]
                      ? errors[`jobTitle${experience?.id}`].message
                      : null
                  }
                />
                {/* Input component for organization name */}
                <InputComponent
                  title={"Organization Name"}
                  type={"text"}
                  name={"organizationName" + experience?.id}
                  register={register}
                  multiline={false}
                  value={experience?.organizationName}
                  setValue={(value) =>
                    editOrganisationNameExperience(value, experience?.id)
                  }
                  error={
                    errors[`organizationName${experience?.id}`] ? true : false
                  }
                  errorMessage={
                    errors[`organizationName${experience?.id}`]
                      ? errors[`organizationName${experience?.id}`].message
                      : null
                  }
                />
                {/* Select component for start year */}
                <SelectComponent
                  title={"Start Year"}
                  errorMessage={
                    errors[`startYear${experience?.id}`]
                      ? errors[`startYear${experience?.id}`].message
                      : null
                  }
                  error={errors[`startYear${experience?.id}`] ? true : false}>
                  <Controller
                    render={(props) => {
                      return (
                        <Select
                          value={props?.field?.value}
                          onChange={props?.field?.onChange}
                          error={
                            errors
                              ? errors[`startYear${experience?.id}`]
                                ? true
                                : false
                              : false
                          }>
                          {/* Mapping through years to create Select options */}
                          {years?.map((year, index) => {
                            return (
                              <MenuItem key={index} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      );
                    }}
                    name={`startYear${experience?.id}`}
                    control={control}
                    rules={{
                      required: "*Please select start year",
                    }}
                    defaultValue={experience?.startYear}
                  />
                </SelectComponent>
                {/* Select component for end year */}
                <SelectComponent
                  title={"End Year"}
                  errorMessage={
                    errors[`endYear${experience?.id}`]
                      ? errors[`endYear${experience?.id}`].message
                      : null
                  }
                  error={errors[`endYear${experience?.id}`] ? true : false}>
                  <Controller
                    render={(props) => (
                      <Select
                        value={props?.field?.value}
                        onChange={props?.field?.onChange}
                        error={
                          errors
                            ? errors[`endYear${experience?.id}`]
                              ? true
                              : false
                            : false
                        }>
                        {/* Mapping through years to create Select options */}
                        {years?.map((year, index) => {
                          return (
                            <MenuItem key={index} value={year}>
                              {year}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                    name={`endYear${experience?.id}`}
                    control={control}
                    rules={{
                      required: "*Please select end year",
                    }}
                    defaultValue={experience?.endYear}
                  />
                </SelectComponent>
              </div>
            </div>
          );
        })}
        
        {/* Render "Add New" button if there are less than 2 experiences */}
        {props?.experiences?.length === 2 ? null : (
          <div className="add-new-btn-cont">
            <Button onClick={addNewExperience} variant="text">
              Add New
            </Button>
          </div>
        )}
        <Divider sx={{ margin: "10px 0px" }} />
        {/* BackNextBtn for navigation with loading state */}
        <BackNextBtn
          onNext={handleNext}
          onBack={handleBack}
          loading={loading}
          tab={props.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

// Connect the component to the Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkExperienceComponent);
