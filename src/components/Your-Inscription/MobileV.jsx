import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, IconButton, styled } from "@mui/material";
import { useState } from "react";
function MobileV() {
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
              <span className="or">OR</span>

              <Button
                className="browse"
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
              <span className="or">OR</span>

              <Button
                className="browse"
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
              <span className="or">OR</span>

              <Button
                className="browse"
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
              <span className="or">OR</span>

              <Button
                className="browse"
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

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCurrentUploadedFile(null);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400, height: "800px", overflowY: "auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
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
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, borderRadius: "10px" }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default MobileV;
