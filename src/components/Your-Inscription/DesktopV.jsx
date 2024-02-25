import * as React from "react";
import { useState } from "react";
import "./YourInscription.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, styled } from "@mui/material";

import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { Remove } from "@mui/icons-material";
function DesktopV() {
  const [currentUploadedFile, setCurrentUploadedFile] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setCurrentUploadedFile(file);
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const steps = [
    {
      label: "CNI File",
      description: (
        <div className="f_Wrappe">
          <h4>Step 1 : Upload CNI file</h4>
          <p>Please Upload CNI file before you go to next step</p>
          <div className="wrapper">
            <div className="box">
              <CloudUploadIcon sx={{ fontSize: "40px", color: "#1976d2" }} />
              <h3>Upload Your file here</h3>
              <span className="types">Files supported: jpg,jpeg,png</span>
              <span>OR</span>

              <Button
                sx={{
                  border: "1px solid",
                  marginTop: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                component="label"
                onChange={handleFileUpload}
              >
                BROWSE
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Picture file",
      description: (
        <div className="f_Wrappe">
          <h4>Step 2 : Upload Picture file</h4>
          <p>Please Upload Picture file before you go to next step</p>
          <div className="wrapper">
            <div className="box">
              <CloudUploadIcon sx={{ fontSize: "40px", color: "#1976d2" }} />
              <h3>Upload Your file here</h3>
              <span className="types">Files supported: jpg,jpeg,png</span>
              <span>OR</span>

              <Button
                sx={{
                  border: "1px solid",
                  marginTop: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                component="label"
                onChange={handleFileUpload}
              >
                BROWSE
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "baccalaureate file",
      description: (
        <div className="f_Wrappe">
          <h4>Step 3 : Upload Baccalaureate file</h4>
          <p>Please Upload Baccalaureate file before you go to next step</p>
          <div className="wrapper">
            <div className="box">
              <CloudUploadIcon sx={{ fontSize: "40px", color: "#1976d2" }} />
              <h3>Upload Your file here</h3>
              <span className="types">Files supported: jpg,jpeg,png</span>
              <span>OR</span>

              <Button
                sx={{
                  border: "1px solid",
                  marginTop: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                component="label"
                onChange={handleFileUpload}
              >
                BROWSE
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Notes file",
      description: (
        <div className="f_Wrappe">
          <h4>Step 4 : Upload Notes file</h4>
          <p>Please Upload Notes file before you go to next step</p>
          <div className="wrapper">
            <div className="box">
              <CloudUploadIcon sx={{ fontSize: "40px", color: "#1976d2" }} />
              <h3>Upload Your file here</h3>
              <span className="types">Files supported: jpg,jpeg,png</span>
              <span>OR</span>

              <Button
                sx={{
                  border: "1px solid",
                  marginTop: "15px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
                component="label"
                onChange={handleFileUpload}
              >
                BROWSE
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  console.log(currentUploadedFile);

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  // const [currentUploadedFile, setCurrentUploadedFile] = useState(null);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);

    // Clear the current uploaded file for the next step
    setCurrentUploadedFile(null);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setCurrentUploadedFile(null);
  };

  return (
    <Box sx={{ width: "100%", height: "650px" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton
              sx={{ color: "white !important" }}
              onClick={handleStep(index)}
            >
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {steps[activeStep].description}
              {/* <Button
                  component="label"
                  variant="contained"
                  onChange={handleFileUpload}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button> */}
              {/* <input type="file" onChange={handleFileUpload} /> */}
              {currentUploadedFile && (
                <div className="displayed_file">
                  <div className="content">
                    <Avatar
                      src={
                        currentUploadedFile
                          ? URL.createObjectURL(currentUploadedFile)
                          : null
                      }
                      sx={{ marginRight: "10px" }}
                    />

                    <span style={{ color: "black", fontSize: "13px" }}>
                      {currentUploadedFile.name}
                    </span>
                  </div>
                  <IconButton>
                    <DeleteIcon sx={{ color: "#fd0200" }} />
                  </IconButton>
                </div>
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default DesktopV;
