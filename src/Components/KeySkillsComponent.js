// Import necessary dependencies and components
import React, { useState } from "react";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/actions";
import { useForm } from "react-hook-form";
import InputComponent from "./InputComponent";
import BackNextBtnComponent from "./BackNextBtnComponent";
import "../Styles/KeySkillsComponent.css";

// Main functional component
const KeySkillsComponent = (props) => {
  // State to handle loading state during asynchronous operations
  const [loading, setLoading] = useState(false);

  // React hook form setup
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle preview button click
  const handlePreview = async (data) => {
    // Simulating an asynchronous operation using setTimeout
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  // Function to handle back button click
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Function to edit a skill at a given index
  const onEditSkill = (value, id) => {
    // Create a new array with the edited skill and update Redux state
    const newSkills = props.skills.map((skill, index) =>
      index === id ? value : skill
    );
    props.onEditSkill(newSkills);
  };

  // Function to delete a skill at a given index
  const onDeleteSkill = (index) => {
    // Dispatch the deleteSkill action to update Redux state
    props.onDeleteSkill(index);
  };

  // Function to render input components for skills
  const renderSkills = () => {
    return props.skills.map((skill, index) => (
      <div key={index} className="key-input-with-delete">
        {/* Reusable InputComponent for skill input */}
        <InputComponent
          type="text"
          name={`skill${index + 1}`}
          register={register}
          multiline={false}
          value={skill}
          setValue={(value) => onEditSkill(value, index)}
          error={errors[`skill${index + 1}`]}
          errorMessage={errors[`skill${index + 1}`]?.message}
        />
        {/* Delete button for each skill (conditionally rendered) */}
        {props.skills.length > 1 && (
          <DeleteOutlineOutlinedIcon
            sx={{ marginLeft: "10px" }}
            onClick={() => onDeleteSkill(index)}
          />
        )}
      </div>
    ));
  };

  // Rendering the main component
  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />

      {/* Form for key skills input */}
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {/* Mapping through skills array to render input components */}
          {renderSkills()}
        </div>

        {/* Button to add a new skill (conditionally rendered) */}
        {props.skills.length < 6 && (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}
          >
            Add new
          </Button>
        )}

        {/* Divider for visual separation */}
        <Divider className="key-skills-divider" />

        {/* Component for back and preview (next) buttons */}
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

// Mapping the Redux state to component props
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

// Mapping the Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

// Connecting the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(KeySkillsComponent);
