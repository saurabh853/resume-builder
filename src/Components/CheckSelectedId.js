import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const CheckSelectedId = ({ selectedTemplateId, children }) => {
  // Destructure selectedTemplateId directly from props
  // If there is a selectedId, render the children of the component
  // Otherwise, redirect to the home ("/") route using the Navigate component
  return selectedTemplateId ? children : <Navigate to={"/"} />;
};

const mapStateToProps = ({ selectedTemplateReducer }) => ({
  selectedTemplateId: selectedTemplateReducer?.selectedTemplateId || null,
  // Provide a default value or handle it based on your application logic
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);
