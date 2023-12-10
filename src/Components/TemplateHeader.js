// Import React library and the CSS file for styling
import React from "react";
import "../Styles/TemplateHeader.css";

// Functional component for the template header
const TemplateHeader = (props) => {
  return (
    // Container div with background color based on props
    <div style={{ backgroundColor: props.bgColor }}>
      {/* Main container for the template header */}
      <div className="template-header">
        {/* Container for the profile image and user details */}
        <div className="template-header-first">
          {/* Check if a profile image is available */}
          {props.personalInfo.profileImg.length > 0 ? (
            // Display profile image if available
            <div className="template-img-cont">
              <img
                className="template-profile-img"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            // Display a placeholder with initials if no profile image
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="template-img-cont"
            >
              <p style={{ color: props.bgColor }} className="template-img-text">
                AM
              </p>
            </div>
          )}
          {/* Container for user details */}
          <div className="template-user-details-cont">
            {/* User name */}
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name"
            >
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            {/* User designation */}
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation"
            >
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
        {/* Container for contact information */}
        <p
          style={{ color: props.primaryColor }}
          className="template-header-second"
        >
          {props.personalInfo.address}
          <br />
          {props.personalInfo.city} &nbsp;
          {props.personalInfo.country} &nbsp;
          {props.personalInfo.postalCode}
          <br />
          {props.personalInfo.mobile}
          <br />
          {/* Container for email with line break */}
          <p className="email-text-warp">{props.personalInfo.email}</p>
          <br />
        </p>
      </div>
      {/* Container for user's objective */}
      <p
        style={{ color: props.secondaryColor }}
        className="template-user-about"
      >
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

// Export the TemplateHeader component as the default export
export default TemplateHeader;
