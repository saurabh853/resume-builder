// Importing necessary functions from Redux
import { createStore,combineReducers } from "redux";

// Importing individual reducers from the "reducers" module
import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
} from "./reducers";

const combineReducer = combineReducers({
    // Each reducer is assigned to a specific section of the store state
    selectedTemplateReducer,    // Reducer for handling selected template data
    personalInfoReducer,        // Reducer for handling personal information data
    workExperienceReducer,      // Reducer for handling work experience data
    keySkillsReducer,           // Reducer for handling key skills data
    educationDetailsReducer,    // Reducer for handling education details data
});
// Creating the Redux store by combining multiple reducers
export const store = createStore(
  combineReducer
);
