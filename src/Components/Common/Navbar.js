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
                  <img
                    src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Flogo1_edfc81b31b.png&w=256&q=75"
                    height="30px"
                    alt="Alma Better"
                  />
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
