import React from "react";
import { useState, useRef, useEffect, useContext} from "react";
import ReactToPrint from "react-to-print";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import PersonalDetails from "./PersonalDetails";
import EduDetails from "./EduDetails";
import ProDetails from "./ProjectDetails";
import ExpDetails from "./ExpDetails";
import Achievement from "./Achievement";
import { addResumeData } from "./../../api/user.api";
import MakeResume from "./../../pages/MakeResume";
import { GlobalContext } from "../../context";

const steps = [
  "Personal",
  "Educational",
  "Experience",
  "Projects",
  "Achievement",
];

export default function Details() {
  const printRef = useRef();
  const resumeRef = useRef();

  const {setImage, image, oldData} = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);

  function saveStates(){
    switch (activeStep) {
      case 0:
        if(pDetails.name===""||pDetails.email===""||pDetails.phone===""||pDetails.address===""){
          alert("please fill out required fields!");
          return false;
        }
        if(!pDetails.selectedImage){
          alert("please upload image.");
          return false;
        }
        break;
      case 1:
        if(eduDetails.length === 0){
          alert("add atleast 1 eduction!");
          return false;
        }
        break;
      case 2:break;
      case 3: break;
      case 4:
        if(snaDetails.techSkills.length < 2 || snaDetails.proSkills.length < 2 || snaDetails.achievements.length < 2){
          alert("add atleast 2 each");
          return false;
        }
        break;
      default:
        alert("something get wrong");
    }
    return true;
  }
  const handleNext = () => {
    if(saveStates()){
      makeData();
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    makeData();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [pDetails, setPDetails] = useState({
    name: (oldData)?oldData.name:"",
    email: (oldData)?oldData.email:"",
    address: (oldData)?oldData.address:"",
    phone: (oldData)?oldData.phone:"",
    github: (oldData)?oldData.links.github:"",
    leetcode: (oldData)?oldData.links.leetcode:"",
    portfolio: (oldData)?oldData.links.portfolio:"",
  });
  const [eduDetails, setEduDetails] = useState((oldData)?oldData.education:[]);
  const [expDetails, setExpDetails] = useState((oldData)?oldData.experience:[]);
  const [proDetails, setProDetails] = useState((oldData)?oldData.projects:[]);
  const [snaDetails, setSnaDetails] = useState({techSkills: (oldData)?oldData.techSkills:[], proSkills: (oldData)?oldData.proSkills:[], achievements: (oldData)?oldData.certificates:[]});

  function makeData(){
    let resumeData= {
      name: pDetails.name,
      email: pDetails.email,
      address: pDetails.address,
      phone: pDetails.phone,
      links: {},
      education: eduDetails,
      experience: expDetails,
      projects: proDetails,
      techSkills: snaDetails.techSkills,
      proSkills: snaDetails.proSkills,
      certificates: snaDetails.achievements,
    };

    if(pDetails.github !== "") resumeData.links["github"] = pDetails.github;
    if(pDetails.leetcode !== "") resumeData.links["leetcode"] = pDetails.leetcode;
    if(pDetails.portfolio !== "") resumeData.links["portfolio"] = pDetails.portfolio;
    sessionStorage.setItem("data", JSON.stringify(resumeData));
    return resumeData;
  }
  const handleSubmit = () => {
    if(!saveStates()){
      return 0;
    }
    let resumeData = makeData();

    let reqData = new FormData();
    reqData.append("file", pDetails.selectedImage);
    reqData.append("data", JSON.stringify(resumeData));
    
    addResumeData(reqData).then((res) => {
      if (res.error){
        if(window.confirm("Unable to save data on database, do you want to continue without save?")){
            printRef.current.handleClick();
        }
      }else{
        printRef.current.handleClick();
      }
    })
  };
  useEffect(() => {
    if (pDetails.selectedImage || image) {
      let profile = URL.createObjectURL(pDetails.selectedImage || image);
      setPDetails({ ...pDetails, photo: profile });
      setImage(pDetails.selectedImage);
      return () => {
        URL.revokeObjectURL(profile);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pDetails.selectedImage]);
  const ENUM_STATES = {
    0: <PersonalDetails pDetails={pDetails} setPDetails={setPDetails} />,
    1: <EduDetails eduDetails={eduDetails} setEduDetails={setEduDetails} />,
    2: <ExpDetails expDetails={expDetails} setExpDetails={setExpDetails} />,
    3: <ProDetails proDetails={proDetails} setProDetails={setProDetails} />,
    4: <Achievement snaDetails={snaDetails} setSnaDetails={setSnaDetails}/>,
  };
  return (
    <Box sx={{ width: "100%", height: "calc( 100vh - 120px ) !important" }}>
      <Stepper activeStep={activeStep} style={{padding: "0px 30px"}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {ENUM_STATES[activeStep]}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          margin: "0 50px 0 50px ",
        }}
      >
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
          variant="contained"
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={() => {
            activeStep === steps.length - 1 ? handleSubmit() : handleNext();
          }}
          variant="contained"
          style={{ backgroundColor: "#006370" }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
        
        <ReactToPrint
            trigger={()=><React.Fragment/>}
            content={()=>resumeRef.current}
            ref={printRef}
          />
          <div style={{display:"none"}}><MakeResume ref={resumeRef}/></div>
      </Box>
    </Box>
  );
}
