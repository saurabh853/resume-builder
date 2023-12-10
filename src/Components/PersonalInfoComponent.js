// Importing necessary components and styles from Material-UI and other dependencies
import { Avatar, Button, Divider, Paper, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../Styles/PersonalInfoComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import { connect } from "react-redux";
import Avatar1 from "react-avatar-edit";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { addPersonalInfo } from "../Redux/actions";
import { useForm } from "react-hook-form";

// Mapping Redux state to component props
const mapStateToProps = (state) => ({
  personalInfo: state?.personalInfoReducer?.personalInfo,
});

// Mapping Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
});

// Styling the dialog using Material-UI's styled function
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Main functional component for the personal information section
const PersonalInfoComponent = (props) => {
  // State variables for managing component state
  const [loading, setLoading] = useState(false);
  const [imgSnackbar, setImgSnackbar] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // State variables for handling image selection and cropping
  const [img, setImg] = useState(
    props?.personalInfo?.profileImg.length ? props?.personalInfo?.profileImg : ""
  );
  const [sotreImage, setSotreImage] = useState([]);
  
  // State variables for handling dialog open/close
  const [open, setOpen] = useState(false);
  
  // Function to open the image update dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the image update dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle the "Next" button click
  const handleNext = (data) => {
    // console.log(img.length);
    if (img.length) {
      setLoading(true);
      props.onAddPersonalInfo({ profileImg: img, ...data });

      setTimeout(() => {
        setLoading(false);
        props.setTab(props?.tab + 1);
      }, 1000);
    } else {
      setImgSnackbar(true);
    }
  };

  // Customized dialog title component
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  // Function to handle image cropping
  const onCrop = (view) => {
    setImg(view);
  };

  // Function to handle image cropping cancellation
  const onClose = (view) => {
    setImg(null);
  };

  // Function to save the cropped image
  const saveImage = () => {
    setSotreImage([{ img }]);
    // props.onSetProfileImage(img);
    setOpen(false);
  };

  // Function to handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setImgSnackbar(false);
  };

  // Function to get window size
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  // State variable to track window size
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // Effect to update window size when it changes
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // const profileImg = sotreImage.map((ele) => ele.img);
  // console.log(props.personalInfo, errors);
  
  // Rendering the component JSX
  return (
    <Paper className="personal-info-paper" elevation={3}>
      {/* Displaying the user's avatar */}
      <Avatar
        sx={{ width: 120, height: 120, marginBottom: 1 }}
        alt="profile img"
        src={
          img?.length ? img : `https://img.icons8.com/color/344/test-account.png`
        }
      />
      <div>
        {/* Button to change profile photo */}
        <Button
          className="change-profile-photo-btn"
          variant="outlined"
          onClick={handleClickOpen}>
          Change Profile Photo
        </Button>
        {/* Dialog for updating the image */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}>
            Update Image
          </BootstrapDialogTitle>
          <DialogContent>
            {/* Component for cropping and updating the avatar */}
            <Avatar1
              width={windowSize.innerWidth > 900 && 400}
              height={windowSize.innerWidth > 500 ? 400 : 150}
              onCrop={onCrop}
              onClose={onClose}
            />
          </DialogContent>
          <DialogActions>
            {/* Button to save the cropped image */}
            <Button autoFocus variant="contained" onClick={saveImage}>
              Save
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      {/* Form for entering personal information */}
      <form onSubmit={handleSubmit(handleNext)}>
        {/* Input components for various personal information fields */}
        <div className="personal-info-form-fields">
          <InputComponent
            title={"First Name"}
            type={"text"}
            name={"firstName"}
            register={register}
            multiline={false}
            value={props?.personalInfo?.firstName}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                firstName: value,
              })
            }
            error={errors?.firstName ? true : false}
            errorMessage={errors?.firstName ? errors?.firstName?.message : null}
          />
          <InputComponent
            title={"Last Name"}
            type={"text"}
            name={"lastName"}
            register={register}
            multiline={false}
            value={props?.personalInfo?.lastName}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                lastName: value,
              })
            }
            error={errors?.lastName ? true : false}
            errorMessage={errors?.lastName ? errors?.lastName?.message : null}
          />
          <InputComponent
            title={"Email"}
            type={"email"}
            name={"email"}
            register={register}
            multiline={false}
            value={props?.personalInfo.email}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                email: value,
              })
            }
            error={errors?.email ? true : false}
            errorMessage={errors?.email ? errors?.email?.message : null}
          />
          <InputComponent
            title={"Mobile"}
            type={"number"}
            name={"mobile"}
            register={register}
            multiline={false}
            value={props?.personalInfo.mobile}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                mobile: value,
              })
            }
            error={errors?.mobile ? true : false}
            errorMessage={errors?.mobile ? errors?.mobile?.message : null}
          />
        </div>
        <InputComponent
          title={"Address"}
          type={"text"}
          name={"address"}
          register={register}
          multiline={false}
          value={props?.personalInfo.address}
          setValue={(value) =>
            props?.onAddPersonalInfo({
              ...props?.personalInfo,
              address: value,
            })
          }
          error={errors?.address ? true : false}
          errorMessage={errors?.address ? errors?.address?.message : null}
        />
        <div style={{ marginTop: 20 }} className="personal-info-form-fields">
          <InputComponent
            title={"City"}
            type={"text"}
            name={"city"}
            register={register}
            multiline={false}
            value={props?.personalInfo.city}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                city: value,
              })
            }
            error={errors?.city ? true : false}
            errorMessage={errors?.city ? errors?.city?.message : null}
          />
          <InputComponent
            title={"State"}
            type={"text"}
            name={"state"}
            register={register}
            multiline={false}
            value={props?.personalInfo?.state}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                state: value,
              })
            }
            error={errors?.state ? true : false}
            errorMessage={errors?.state ? errors?.state?.message : null}
          />
          <InputComponent
            title={"Postal Code"}
            type={"number"}
            name={"postalCode"}
            register={register}
            multiline={false}
            value={props?.personalInfo?.postalCode}
            setValue={(value) =>
              props?.onAddPersonalInfo({
                ...props?.personalInfo,
                postalCode: value,
              })
            }
            error={errors?.postalCode ? true : false}
            errorMessage={errors?.postalCode ? errors?.postalCode?.message : null}
          />
        </div>
        <InputComponent
          title={"Objective"}
          type={"text"}
          name={"objective"}
          register={register}
          // multiline={true}
          value={props?.personalInfo.objective}
          setValue={(value) =>
            props?.onAddPersonalInfo({
              ...props?.personalInfo,
              objective: value,
            })
          }
          error={errors?.objective ? true : false}
          errorMessage={errors?.objective ? errors?.objective?.message : null}
        />
        {/* Divider separating personal information and objective sections */}
        <Divider className="personal-details-divider" />
        {/* Component for rendering Back and Next buttons */}
        <BackNextBtnComponent
          // onNext={() => handleSubmit(handleNext)}
          loading={loading}
          tab={props?.tab}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
      {/* Snackbar for notifying user to select a profile image */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={imgSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Please select a profile image"
        key={vertical + horizontal}
      />
    </Paper>
  );
};

// Connecting the component to Redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfoComponent);
