# Resume Builder Project

## Overview

The Resume Builder project is a web application that allows users to create professional resumes using predefined templates. The project is built using React and incorporates various libraries and tools for efficient development.

## Hosted Website: https://resume-builder-silk.vercel.app/

## Project Structure
## Application Folder Structure

```
├── public/
│	├── favicon.ico
│  ├── index.html
│  ├── index.html
│  ├── index.html
├──src/
│	├──App.js
│	├──App.css
│	├──App.test.js
│	├──index.css
│	├──index.js
│	├──setupTests.js
│	├──Components/
│		├──images/
│			├──LOGO.png
│			├──Right.png
│			├──aboutus.png
│			├──download.png
│			├──nodata.png
│   	├── Education.jsx
│		├──GettingStarted.jsx
│		├──Keyskills.jsx
│		├──Myresume.jsx
│		├──PersonalInformation.jsx
│		├──Workexperience.jsx
│	├──Data/
│		├──data.js
│	├──Pages/
│		├──About US/
│			├──Aboutus.jsx
│		├──Details Filing/
│			├──Detailfilling.jsx
│			├──sidebar.css 
│		├──Home/
│			├──TempleteCard.jsx
│			├──Templetes.jsx
│		├──Preview/
│			├──Preview,jsx
│	├──Redux/
│		├──actions/
│			├──actions.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──constants/
│			├──typeCodes.js
│		├──reducers/
│			├──initialState.js
│			├──rootReducer.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──store
│			├──store.js
│	├──Templetes/
│		├──Resume1.css
│		├──Resume1.jsx
│		├──Resume2.jsx
│		├──Resume3.css
│		├──Resume3.jsx
│		├──Resume4.css
│		├──Resume4.jsx
├──index.js   
├──package-lock.json
├──package.json
└──tailwind.config.js
```
### Libraries Used:

1. **Material UI Library:**
   - [Material UI Docs](https://mui.com/material-ui/getting-started/overview/)
   - Used for creating a responsive and visually appealing user interface.
   - Components like input fields, containers, buttons, and icons are utilized.

2. **React-hook-form Library:**
   - [React-hook-form Docs](https://react-hook-form.com/)
   - Enables easy form validation for input fields and form submissions.

3. **Redux:**
   - Used for global state management, particularly managing templates data and data during resume creation.

4. **jspdf Library:**
   - [jspdf Library Resources](https://github.com/eKoopmans/pdfmake)
   - Used to convert a React component into a PDF for easy download.

5. **React Router:**
   - [React Router Docs](https://reactrouter.com/)
   - Facilitates navigation between different pages within the application.

### Project Pages:

1. **Home Page:**
   - Header with logo and navigation links.
   - Information section displaying predefined resume templates.
   - Use of Material UI for layout and design.

2. **Details Filling Page:**
   - Tab bar on the right for Personal Info, Work Experience, Education, and Key Skills.
   - Dynamic rendering of details filling layouts based on tab selection.
   - Implementation of back and next buttons for navigation.
   - Use of react-hook-form for input validation.

3. **Preview Page:**
   - Display of chosen template with user-filled details on the left.
   - Input field for the user to name the resume on the right.
   - Back and Save buttons for navigation and PDF download.
   - Utilization of jspdf library for PDF conversion and download.

4. **About Us Page:**
   - Information about the website and its purpose.
   - Design follows a user-friendly and informative layout.

## Project Flow

1. **Home Page:**
   - Users view predefined templates.
   - Hovering over a template reveals a "Use Template" button.
   - Clicking the button navigates to the Details Filling Page.

2. **Details Filling Page:**
   - Users fill in details for Personal Info, Work Experience, Education, and Key Skills.
   - Dynamic layout changes based on tab selection.
   - Back and next buttons for navigation.

3. **Preview Page:**
   - Users preview the resume with all filled details.
   - Input field for naming the resume.
   - Back button returns to the Details Filling Page.
   - Save button converts the resume to PDF and triggers download.
   - Successful download shows a modal with a success message.

4. **About Us Page:**
   - Users access information about the website and its purpose.

## Project Setup

1. Install dependencies using `npm install`.
2. Run the application using `npm start`.