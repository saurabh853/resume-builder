import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../Styles/DetailsFillingSideBar.css";

// Constant for menu item height
const ITEM_HEIGHT = 48;

const DetailFillingSidebar = (props) => {

  // Function to get window size
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  // Effect to handle window resize
  useEffect(() => {
    const handleWindowResize = () => setWindowSize(getWindowSize());

    // Adding and removing event listener on component mount/unmount
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Function to render menu item
  const renderMenuItem = (tabIndex, icon, text) => (
    <MenuItem
      key={tabIndex}
      sx={props?.tab === tabIndex ? { color: "rgb(0, 128, 255)" } : null}
      onClick={handleClose}
    >
      {icon}
      <ListItemText
        className="IcoSpace"
        primary={text}
        sx={
          props?.tab === tabIndex
            ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
            : null
        }
      />
    </MenuItem>
  );

  return (
    <div>
      {/* Sidebar for larger screens */}
      {windowSize?.innerWidth > 850 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
            height: "fit-content",
          }}
        >
          <List disablePadding>
            {/* Personal Info */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={props?.tab === 0 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null}
              >
                <AccountCircleOutlinedIcon color={props?.tab === 0 ? "info" : "disabled"} />
                <ListItemText
                  className="IcoSpace"
                  primary="Personal Info"
                  sx={props?.tab === 0 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            {/* Work Experience */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={props?.tab === 1 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null}
              >
                <WorkHistoryRoundedIcon color={props?.tab === 1 ? "info" : "disabled"} />
                <ListItemText
                  className="IcoSpace"
                  primary="Work Experience"
                  sx={props?.tab === 1 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            {/* Education */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={props?.tab === 2 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null}
              >
                <SchoolRoundedIcon color={props?.tab === 2 ? "info" : "disabled"} />
                <ListItemText
                  className="IcoSpace"
                  primary="Education"
                  sx={props?.tab === 2 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            {/* Key Skills */}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={props?.tab === 3 ? { borderLeft: "3px solid rgb(0, 128, 255)" } : null}
              >
                <StarsRoundedIcon color={props?.tab === 3 ? "info" : "disabled"} />
                <ListItemText
                  className="IcoSpace"
                  primary="Key Skills"
                  sx={props?.tab === 3 ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" } : null}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        // Menu for smaller screens
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {/* Menu Item - Personal Info */}
            {renderMenuItem(0, <AccountCircleOutlinedIcon color={props.tab === 0 ? "info" : "disabled"} />, "Personal Info")}
            <Divider />
            {/* Menu Item - Work Experience */}
            {renderMenuItem(1, <WorkHistoryRoundedIcon color={props.tab === 1 ? "info" : "disabled"} />, "Work Experience")}
            <Divider />
            {/* Menu Item - Education */}
            {renderMenuItem(2, <SchoolRoundedIcon color={props.tab === 2 ? "info" : "disabled"} />, "Education")}
            <Divider />
            {/* Menu Item - Key Skills */}
            {renderMenuItem(3, <StarsRoundedIcon color={props.tab === 3 ? "info" : "disabled"} />, "Key Skills")}
          </Menu>
        </div>
      )}
    </div>
  );
};

export default DetailFillingSidebar;
