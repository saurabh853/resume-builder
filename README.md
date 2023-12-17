# Resume Builder Project

## Overview

The Resume Builder project is a web application that allows users to create professional resumes using predefined templates. The project is built using React and incorporates various libraries and tools for efficient development.

## Hosted Website: https://resume-builder-silk.vercel.app/

## Project Structure

### Application Folder Structure

```  
├── public
│   ├── favicon.ico  
│   ├── index.html   
│   └── manifest.json
└── src
    ├── App.css      
    ├── App.js       
    ├── Components
    │   ├── BackNextBtn.js
    │   ├── BlackScreen.js
    │   ├── CheckSelectedId.js
    │   ├── Common
    │   │   └── Navbar.js
    │   ├── DetailFillingSidebar.js
    │   ├── EducationComponent.js
    │   ├── InputComponent.js
    │   ├── KeySkillsComponent.js
    │   ├── PersonalInfoComponent.js
    │   ├── PreviewComponent.js
    │   ├── SelectComponent.js
    │   ├── TemplateEducationComponent.js    
    │   ├── TemplateHeader.js
    │   ├── TemplateHeading.js
    │   ├── TemplateKeySkillComponent.js     
    │   ├── TemplateOneExperienceComponent.js
    │   └── WorkExperienceComponent.js       
    ├── Data
    │   ├── data.js
    │   └── templates.js
    ├── Images
    │   ├── banner.png
    │   ├── profile.png
    │   ├── resume-template-1.JPG
    │   ├── resume-template-2.JPG
    │   ├── resume-template-3.JPG
    │   ├── resume-template-4.JPG
    │   └── sdfdrsf.pdf      
    ├── Pages
    │   ├── AboutUs.js       
    │   ├── DetailsFilling.js
    │   ├── Home.js
    │   └── MyResumes.js
    ├── Redux
    │   ├── actionTypes.js
    │   ├── actions.js
    │   ├── reducers.js
    │   └── store.js
    ├── Styles
    │   ├── AboutUs.css
    │   ├── BackNextBtn.css
    │   ├── BlackScreen.css
    │   ├── DetailsFilling.css
    │   ├── DetailsFillingSideBar.css
    │   ├── EducationComponent.css
    │   ├── Home.css
    │   ├── InputComponent.css
    │   ├── KeySkillsComponent.css
    │   ├── MyResumes.css
    │   ├── Navbar.css
    │   ├── PersonalInfoComponent.css
    │   ├── PreviewComponent.css
    │   ├── SelectComponent.css
    │   ├── Template1.css
    │   ├── Template2.css
    │   ├── TemplateEducationComponent.css
    │   ├── TemplateHeader.css
    │   ├── TemplateHeading.css
    │   ├── TemplateKeySkillComponent.css
    │   ├── TemplateOneExperienceComponent.css
    │   └── WorkExperienceComponent.css
    ├── Templates
    │   ├── Template1.js
    │   ├── Template2.js
    │   ├── Template3.js
    │   └── Template4.js
    ├── Utils
    │   └── inputChecks.js
    ├── __test__
    │   ├── AboutUs.test.js
    │   ├── BackNextBtn.test.js
    │   ├── BlackScreen.test.js
    │   ├── DetailsFilling.test.js
    │   ├── EducationComponent.test.js
    │   ├── Home.test.js
    │   ├── MyResume.test.js
    │   └── PreviewComponent.test.js
    ├── index.css
    └── index.js
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