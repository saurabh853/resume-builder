import React, { useState } from "react";
import { connect } from "react-redux";
import { Divider, MenuItem, Paper, Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { addEducation } from "../Redux/actions";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import BackNextBtnComponent from "./BackNextBtnComponent";
import "../Styles/EducationComponent.css";

// Array of years for the Select components
const years = [
  "Present", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016",
  "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007",
  "2006", "2005", "2004", "2003", "2002", "2001", "2000",
];

// Mapping state to props
const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
});

// EducationComponent functional component
const EducationComponent = (props) => {
  // State for loading indicator
  const [loading, setLoading] = useState(false);

  // Destructuring useForm hook
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  // Function to handle going back to the previous tab
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Function to handle going to the next tab
  const handleNext = (data) => {
    setLoading(true);
    props.onAddEducation(data);

    // Simulating an asynchronous action with setTimeout
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  return (
    // Paper component for styling
    <Paper className="education-paper" elevation={3}>
      {/* Heading for the education section */}
      <h2 className="education-heading">Education Details</h2>
      {/* Divider for visual separation */}
      <Divider sx={{ margin: "10px 0px" }} />
      {/* Form for handling education details */}
      <form onSubmit={handleSubmit(handleNext)}>
        {/* Container for form elements */}
        <div className="education-form-cont">
          {/* Input component for University */}
          <InputComponent
            title={"University"}
            type={"text"}
            name={"university"}
            register={register}
            multiline={false}
            value={props.educationInfo.university}
            setValue={(value) => props.onAddEducation({ ...props.educationInfo, university: value })}
            error={errors.university ? true : false}
            errorMessage={errors.university ? errors.university.message : null}
          />
          {/* Input component for Degree */}
          <InputComponent
            title={"Degree"}
            type={"text"}
            name={"degree"}
            register={register}
            multiline={false}
            value={props.educationInfo.degree}
            setValue={(value) => props.onAddEducation({ ...props.educationInfo, degree: value })}
            error={errors.degree ? true : false}
            errorMessage={errors.degree ? errors.degree.message : null}
          />
          {/* Select component for Start Year */}
          <SelectComponent
            title={"Start Year"}
            errorMessage={errors.startYear ? errors.startYear.message : null}
            error={errors.startYear ? true : false}
          >
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.startYear ? true : false}
                >
                  {/* Mapping through years array to create MenuItem components */}
                  {years.map((year, index) => (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name={"startYear"}
              control={control}
              rules={{ required: "*Please select start year" }}
              defaultValue={props.educationInfo.startYear}
            />
          </SelectComponent>
          {/* Select component for End Year */}
          <SelectComponent
            title={"End Year"}
            errorMessage={errors.endYear ? errors.endYear.message : null}
            error={errors.endYear ? true : false}
          >
            <Controller
              render={(props) => (
                <Select
                  value={props.field.value}
                  onChange={props.field.onChange}
                  error={errors.endYear ? true : false}
                >
                  {/* Mapping through years array to create MenuItem components */}
                  {years.map((year, index) => (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name={"endYear"}
              control={control}
              rules={{ required: "*Please select end year" }}
              defaultValue={props.educationInfo.endYear}
            />
          </SelectComponent>
        </div>
        {/* Divider for visual separation */}
        <Divider sx={{ margin: "10px 0px" }} />
        {/* BackNextBtnComponent for navigation and loading indicator */}
        <BackNextBtnComponent
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

// Connecting the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(EducationComponent);
