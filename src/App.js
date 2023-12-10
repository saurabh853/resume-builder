// Importing necessary styles for the app
import "./App.css";

// Importing React Router components for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing the different pages and components used in the app
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

// The main App component
const App = () => {
  return (
    // Setting up the Router to handle navigation
    <Router>
      {/* Defining different routes for the app */}
      <Routes>
        {/* Home Page Route */}
        <Route exact path="/" element={<Home />} />

        {/* Details Filling Page */}
        <Route
          exact
          path="/template/fill-details"
          element={
            // Wrapping DetailsFilling component with CheckSelectedId component
            // to ensure certain conditions are met before rendering
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />

        {/* My Resumes Page */}
        <Route exact path="/my/resumes" element={<MyResumes />} />

        {/* About Us Page */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

// Exporting the App component as the default export
export default App;
