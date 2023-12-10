// Importing necessary components and styles from Material-UI and other libraries
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import "../Styles/AboutUs.css";
import banner from "../Images/banner.png";
import {
  // React share components for social media sharing
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  // Icons for the social media share buttons
  FacebookIcon,
  XIcon, // Assuming this is a custom icon, you may need to replace it with the correct import
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";

// Functional component definition
export default function ButtonMUI() {
  // Share URL and title for social media sharing
  const shareUrl = "https://resume-builder-silk.vercel.app/";
  const title = "resume-builder";

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Main content stack */}
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>

        {/* Stack for arranging content in a row or column */}
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px">

          {/* Text content with responsive font size and spacing */}
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
            
            
          <p>Leverage the powerful Resume Builder, a complimentary online tool, to meticulously create a standout resume with utmost efficiency. Benefit from its diverse range of customizable features, enabling you to swiftly generate a highly professional document tailored to your unique strengths. Elevate your resume's visual appeal by seamlessly incorporating supplementary profile images.</p>

          <p>Upon filling in the necessary fields, take advantage of the preview feature to ensure your resume meets the highest standards. Download your polished document with a single click, allowing you to store it locally on your hard drive for easy access. The user-friendly interface also grants you the flexibility to revisit and update or delete previously created resumes, ensuring seamless management and adaptability to your evolving career needs. Maximize the potential of Resume Builder to present yourself in the best possible light to prospective employers.</p>
          </Typography>
          {/* Stack for holding an image */}
          <Stack>
            <img
              className="aboutResumeImage"
              src={banner}
              alt="img"
            />
          </Stack>
        </Stack>

        {/* Box for additional content with margin top */}
        <Box mt="25px">
          {/* Title for the social media sharing section */}
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
           {/* Container for social media share buttons */}
          <Box className="icons">
            {/* Individual social media share buttons with icons */}
            <span className="social-media-icon-cont">
             <FacebookShareButton
                url={shareUrl}
                className="network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              </span>
              <span className="social-media-icon-cont">
               <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="network__share-button"
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
                </span>
                <span className="social-media-icon-cont">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                </span>
                <span className="social-media-icon-cont">
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </span>

                <span className="social-media-icon-cont">
                  <LinkedinShareButton
                    url={shareUrl}
                    className="network__share-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </span>
                <span className="social-media-icon-cont">
                  <RedditShareButton
                      url={shareUrl}
                      title={title}
                      windowWidth={660}
                      windowHeight={460}
                      className="network__share-button"
                    >
                      <RedditIcon size={32} round />
                  </RedditShareButton>
                </span>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
