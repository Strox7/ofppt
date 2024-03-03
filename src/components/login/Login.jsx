import { useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import TransitionAlerts from "../alerts/TransitionAlerts";
import EastIcon from "@mui/icons-material/East";
// break
import * as React from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "@mui/joy/Input";
import { CircularProgress } from "@mui/material";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { dispatch } = React.useContext(AuthContext);

  const navigat = useNavigate();
  const handleLogin = (e) => {
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigat("/");
        // setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
        // ..
      });
  };

  return (
    <div className="login">
      <div className="imageHolder">
        <div className="box">
          {/* <Avatar sx={{ width: "100px", height: "100px" }} /> */}
          <img src="/ofppt/ofpptL2.png" />
          <h1>Welcome Back! Login and {"Let's"} Get Started</h1>
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="container">
          {/* <button className="back_Button" onClick={() => navigat("/Signup")}>
            <EastIcon sx={{ fontSize: "40px" }} />
          </button> */}
          <div className="image">
            <img
              src="https://seeklogo.com/images/O/ofppt-logo-ACD755B3D2-seeklogo.com.png"
              alt="logo"
            />
          </div>
          <h1>Login</h1>
          <p className="styled_p">
            Welcome Back ! Please fill the input below here
          </p>

          {/* end of code */}
          <div className="inputWrapper">
            <FormControl>
              <Input
                required
                name="email"
                sx={{
                  backgroundColor: "transparent !important",
                  color: "white",
                  padding: "15px 20px",
                  marginBottom: "20px",
                }}
                placeholder="Email"
                startDecorator={<MailOutlineOutlinedIcon />}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <Input
                required
                name="password"
                sx={{
                  backgroundColor: "transparent !important",
                  color: "white",
                  padding: "15px 20px",
                  marginBottom: "20px",
                }}
                placeholder="Password"
                startDecorator={<LockOutlinedIcon />}
                type={showPassword ? "text" : "password"}
                endDecorator={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{
                        color: "white",
                        "&.Mui-focused": {
                          border: "1px solid #1976d2 !important",
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                disableUnderline
              />
            </FormControl>
          </div>
          <div className="inputWrapper2">
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{ width: "200px", padding: "15px", borderRadius: "50px" }}
            >
              {isLoading ? (
                <>
                  Loading{" "}
                  <CircularProgress
                    size={20}
                    style={{ marginLeft: 10, color: "white" }}
                  />
                </>
              ) : (
                "Login"
              )}
            </Button>
            <p>
              Don’t you have an account ?{" "}
              <button
                style={{ cursor: "pointer" }}
                onClick={() => navigat("/Signup")}
              >
                Sign Up
              </button>
            </p>
            {error && <TransitionAlerts />}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
