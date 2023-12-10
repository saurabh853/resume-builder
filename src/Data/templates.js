// Importing image sources for each resume template
import templateOneImg from "../Images/resume-template-1.JPG";
import templateTwoImg from "../Images/resume-template-2.JPG";
import templateThreeImg from "../Images/resume-template-3.JPG";
import templateFourImg from "../Images/resume-template-4.JPG";

// Importing React components for each resume template
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";

// Defining an array of template objects
export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template THree",
    template_img: templateThreeImg,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    template: <Template4 />,
  }
];
