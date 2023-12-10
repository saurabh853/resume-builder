import * as actionTypes from "./actionTypes";

const createAction = (type, payload) => ({ type, payload });

// Actions for selecting templates and resumes
export const selectTemplate = (id) => createAction(actionTypes.SELECTTEMPLATE, id);
export const selectResume = (id) => createAction(actionTypes.SELECTRESUME, id);

// Action for adding personal information
export const addPersonalInfo = (details) => createAction(actionTypes.ADDPERSONALINFO, details);

// Action for adding experience
export const addExperience = (experience) => createAction(actionTypes.ADDEXPERIENCE, experience);

// Action for adding all experiences
export const addAllExperience = (experiences) => createAction(actionTypes.ADDALLEXPERIENCE, experiences);

// Action for adding new skills
export const addNewSkills = () => createAction(actionTypes.ADDNEWSKILLS, null);

// Action for editing skills
export const editSkill = (skills) => createAction(actionTypes.EDITSKILL, skills);

// Action for deleting a skill
export const deleteSkill = (id) => createAction(actionTypes.DELETESKILL, id);

// Action for adding education details
export const addEducation = (details) => createAction(actionTypes.ADDEDUCATION, details);

export const clearAllData = (details) => createAction(actionTypes.CLEAR_ALL, null);
