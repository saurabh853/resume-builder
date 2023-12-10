// Importing action types to use in the reducers
import * as actionTypes from "./actionTypes";

// Initial state for selected template reducer
const initialSelectedTemplateState = {
  selectedTemplateId: null,
  selectedResumeId: null,
};

// Initial state for personal information reducer
const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
};

// Initial state for work experience reducer
const initialWorkExperienceState = {
  experiences: [
    {
      id: 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

// Initial state for education details reducer
const initialEducationState = {
  educationInfo: {
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

// Initial state for key skills reducer
const initialSkillsState = {
  skills: ["", "", ""],
};

// Reducer for selected template actions
export const selectedTemplateReducer = (state = initialSelectedTemplateState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: payload };
    default:
      return state;
  }
};

// Reducer for personal information actions
export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDPERSONALINFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

// Reducer for work experience actions
export const workExperienceReducer = (state = initialWorkExperienceState, { type, payload }) => {
  const actions = {
    [actionTypes.ADDEXPERIENCE]: () => ({
      ...state,
      experiences: [...state.experiences, payload],
    }),
    [actionTypes.ADDALLEXPERIENCE]: () => ({
      ...state,
      experiences: payload,
    }),
    default: () => state,
  };

  return (actions[type] || actions.default)();
};

// Reducer for key skills actions
export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case actionTypes.DELETESKILL: {
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );

      return { ...state, skills: newSkills };
    }
    default:
      return state;
  }
};

// Reducer for education details actions
export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case actionTypes.ADDEDUCATION:
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
