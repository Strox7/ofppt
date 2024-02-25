import Header from "../header/Header";
import Sidbar from "../sidbar/Sidbar";
import "./newpassword.css";
import * as React from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function NewPassword() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  // Step 2: Create Toggle Function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="newpassword">
      <Sidbar isOpen={isSidebarOpen} />
      <div className="main-app">
        <Header onToggleSidebar={toggleSidebar} />

        <div className="content">
          <div className="image">
            <img src="/reset.png" alt="" />
          </div>
          <form>
            <h1>
              Forgot Your <span>Password?</span>
            </h1>
            <FormControl
              sx={{
                m: 1,

                "& input": { padding: "13.5px 14px 13.5px 0" },
                "& fieldset": {
                  border: "none",
                  borderBottom: "1px solid white",
                  borderRadius: "0",
                },
              }}
              variant="outlined"
            >
              <InputLabel place htmlFor="outlined-adornment-email"></InputLabel>
              <OutlinedInput
                sx={{ color: "white" }}
                readOnly
                placeholder="bhmostafa@mail.com"
                label="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ color: "white" }} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              sx={{
                m: 1,
                "& input": { padding: "13.5px 14px 13.5px 0" },
                "& fieldset": {
                  border: "none",
                  borderBottom: "1px solid white",
                  borderRadius: "0",
                },
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                sx={{ color: "white" }}
                placeholder="New Password"
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: "white" }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              className="botton"
              type="submit"
              variant="contained"
              disableElevation
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewPassword;
