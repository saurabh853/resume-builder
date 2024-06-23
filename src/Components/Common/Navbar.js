// Importing external styles for the Navbar
import "../../Styles/Navbar.css";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Mapping dispatch to props, but it doesn't have any actions for now
const mapDispatchToProps = (dispatch) => ({});

// Width of the drawer when it's open
const drawerWidth = 240;



// Mapping state to props for the Redux connect
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
});


// Theme for the logo
const logoTheme = createTheme({
  palette: {
    primary: {
      main: "#1f2937",
    },
  },
});

// Functional component for the Navbar
function Navbar(props) {
  // State to manage mobile drawer open/close
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Handler for toggling the mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // JSX for the content of the drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* Logo with a NavLink to the home page */}
        <NavLink to="/">
          <img
            src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
            height="30px"
            alt="Alma Better"
          />
        </NavLink>
      </Typography>
      <Divider />
      {/* Links in the drawer */}
      <List
        className="drawerLinks"
        sx={{
          display: "flex",
          textAlign: "left",
          paddingLeft: "20px",
          flexDirection: "column",
        }}>
        <NavLink className="nav-link" to="/" color="inherit">
          Resume Templates
        </NavLink>
        <NavLink to="/my/resumes" className="nav-link" color="inherit">
          My Resumes
        </NavLink>
        <NavLink to="/about-us" color="inherit" className="nav-link">
          About us
        </NavLink>
      </List>
    </Box>
  );

  // JSX for the main Navbar
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* Theme provider for the logo */}
        <ThemeProvider theme={logoTheme}>
          {/* AppBar for the main Navbar */}
          <AppBar component="nav" position="sticky" className="appbar" sx={{ color: "primary", boxShadow: "none" }}>
            {/* Toolbar for the AppBar */}
            <Toolbar id="toolbar">
              {/* Hamburger menu icon for mobile view */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                id="icon"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}>
                <MenuIcon />
              </IconButton>
              {/* Logo in the Navbar */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { sm: "block" },
                  fontSize: "25px",
                  position: "relative",
                  top: "5px",
                }}>
                {/* Logo with a NavLink to the home page */}
                <NavLink to="/" className="homeIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(0.18000000000000013,0,0,0.18000000000000013,209.9200625610352,209.92000000000002)"><path d="M414.007 148.75c5.522 0 10-4.477 10-10V30c0-16.542-13.458-30-30-30h-364c-16.542 0-30 13.458-30 30v452c0 16.542 13.458 30 30 30h364c16.542 0 30-13.458 30-30v-73.672c0-5.523-4.478-10-10-10s-10 4.477-10 10V482c0 5.514-4.486 10-10 10h-364c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h364c5.514 0 10 4.486 10 10v108.75c0 5.523 4.478 10 10 10z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M212.007 54c-50.729 0-92 41.271-92 92 0 26.317 11.11 50.085 28.882 66.869.333.356.687.693 1.074 1 16.371 14.979 38.158 24.13 62.043 24.13 23.885 0 45.672-9.152 62.043-24.13a9.993 9.993 0 0 0 1.074-1c17.774-16.784 28.884-40.552 28.884-66.869 0-50.729-41.271-92-92-92zm0 164c-16.329 0-31.399-5.472-43.491-14.668 8.789-15.585 25.19-25.332 43.491-25.332s34.702 9.747 43.491 25.332C243.405 212.528 228.336 218 212.007 218zm-16-76v-6.5c0-8.822 7.178-16 16-16s16 7.178 16 16v6.5c0 8.822-7.178 16-16 16s-16-7.178-16-16zm73.94 46.683a69.375 69.375 0 0 0-29.463-24.697c4.71-6.087 7.523-13.712 7.523-21.986v-6.5c0-19.851-16.149-36-36-36s-36 16.149-36 36v6.5c0 8.274 2.813 15.899 7.523 21.986a69.375 69.375 0 0 0-29.463 24.697c-8.829-11.953-14.06-26.716-14.06-42.683 0-39.701 32.299-72 72-72s72 32.299 72 72c0 15.967-5.231 30.73-14.06 42.683zM266.007 438h-54c-5.522 0-10 4.477-10 10s4.478 10 10 10h54c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 382h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 326h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM88.366 272.93a10.077 10.077 0 0 0-7.079-2.93c-2.631 0-5.211 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 328.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 384.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.072 10.072 0 0 0 7.07 2.93c2.64 0 5.22-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM266.007 270h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM491.002 130.32c-9.715-5.609-21.033-7.099-31.871-4.196-10.836 2.904-19.894 9.854-25.502 19.569L307.787 363.656a10.016 10.016 0 0 0-1.278 3.891l-8.858 79.344a10.004 10.004 0 0 0 9.937 11.11 9.99 9.99 0 0 0 5.931-1.948l64.284-47.344a9.983 9.983 0 0 0 2.73-3.052l125.841-217.963c11.58-20.056 4.684-45.794-15.372-57.374zM320.063 426.394l4.626-41.432 28.942 16.71-33.568 24.722zm48.15-39.398-38.105-22 100.985-174.91 38.105 22-100.985 174.91zm120.841-209.303-9.857 17.073-38.105-22 9.857-17.073a21.855 21.855 0 0 1 13.358-10.25 21.85 21.85 0 0 1 16.694 2.198 21.855 21.855 0 0 1 10.25 13.358 21.856 21.856 0 0 1-2.197 16.694z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>
                </NavLink>
              </Typography>
              {/* Links in the Navbar for larger screens */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink to="/" className="nav-link" color="inherit">
                  Resume Templates
                </NavLink>
                <NavLink to="/my/resumes" className="nav-link" color="inherit">
                  My Resumes
                </NavLink>
                <NavLink to="/about-us" className="nav-link aboutUs" color="inherit">
                  About Us
                </NavLink>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        {/* Drawer component for mobile view */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {/* Content of the mobile drawer */}
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

// Connecting the component to Redux and exporting it
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
