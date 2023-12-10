// Importing necessary modules and components from React and other files
import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import DetailFillingSidebar from "../Components/DetailFillingSidebar";
import EducationComponent from "../Components/EducationComponent";
import KeySkillsComponent from "../Components/KeySkillsComponent";
import PersonalInfoComponent from "../Components/PersonalInfoComponent";
import PreviewComponent from "../Components/PreviewComponent";
import WorkExperienceComponent from "../Components/WorkExperienceComponent";
import "../Styles/DetailsFilling.css";

// Functional component for handling details filling
const DetailsFilling = (props) => {
  // State to manage the active tab
  const [tab, setTab] = useState(0);

  return (
    // Main container for details filling page
    <div className="details-filling">
      {/* Navigation bar component */}
      <Navbar active={""} />

      {/* Conditionally rendering components based on the active tab */}
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          {/* Sidebar for navigating between different sections */}
          <DetailFillingSidebar tab={tab} setTab={setTab} />

          {/* Conditional rendering of Personal Info Component based on active tab */}
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}

          {/* Conditional rendering of Key Skills Component based on active tab */}
          {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}

          {/* Conditional rendering of Work Experience Component based on active tab */}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}

          {/* Conditional rendering of Education Component based on active tab */}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}

      {/* Conditional rendering of Preview Component when the active tab is 4 */}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

// Exporting the DetailsFilling component as the default export
export default DetailsFilling;
