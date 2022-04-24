import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonalDetails from './PersonalDetails';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import EduDetails from './EduDetails';
import ProDetails from './ProDetails';
import ExpDetails from './ExpDetails';
import Achievement from './Achievement';
const steps = ['Personal', 'Educational', 'Experience', 'Projects', 'Achievement'];

export default function Details() {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0: sessionStorage.setItem(activeStep, JSON.stringify(pDetails));
        break;
      case 1: sessionStorage.setItem(activeStep, JSON.stringify(eduDetails));
        break;
      case 2: sessionStorage.setItem(activeStep, JSON.stringify(expDetails));
        break;
      case 3: sessionStorage.setItem(activeStep, { "proj": JSON.stringify(proDetails), "skill": JSON.stringify(skill) });
        break;
      case 4: sessionStorage.setItem(activeStep, JSON.stringify(certificates));
        break;
      default: alert("something get wrong");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [pDetails, setPDetails] = useState({
    name: String,
    email: String,
    address: String,
    phone: Number,
    photo: String,
    links: [String],
  });
  const [eduDetails, setEduDetails] = useState([{
    degree: String,
    organisation: String,
    yearOfCompletion: String,
  }]);
  const [expDetails, setExpDetails] = useState([{
    organisation: String,
    role: String,
    description: String,
    startDate: String,
    endDate: String,
  }]);
  const [proDetails, setProDetails] = useState({
    name: String,
    type: String,
    startDate: String,
    endDate: String,
  });
  const [skill, setSkill] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const handleSubmit = () => {

    let data = {
      resumeData: {
        name: pDetails.name,
        email: pDetails.email,
        address: pDetails.address,
        phone: pDetails.phone,
        photo: undefined,
        links: pDetails.links,
        education: eduDetails,
        experience: expDetails,
        projects: proDetails,
        skills: skill,
        certificates: certificates,
      },
    }


  }
  const ENUM_STATES = {
    0: <PersonalDetails pDetails={pDetails} setPDetails={setPDetails} />,
    1: <EduDetails />,
    2: <ExpDetails />,
    3: <ProDetails />,
    4: <Achievement />
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }

          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        {ENUM_STATES[activeStep]}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, margin: "0 50px 0 50px ", }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            variant="contained"
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={() => { (activeStep === steps.length - 1) ? handleSubmit() : handleNext() }} variant="contained" style={{ backgroundColor: "#006370" }}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
