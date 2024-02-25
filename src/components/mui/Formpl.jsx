import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

import * as React from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShortPassword from "../alerts/ShortPassword";
import ExistAcc from "../alerts/ExistAcc";
import Button from "@mui/material/Button";
import RandomError from "../alerts/RandomError";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { doc, setDoc } from "firebase/firestore";

function Formpl() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [exist, setexist] = useState(false);
  const [weak, setWeak] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigat = useNavigate();

  return (
    <div>
      <div className="imageHolder">
        <img src="/login.jpg" alt="" />
      </div>
      <div className="holder">
        <form onSubmit={handleAdd}>
          <div className="image">
            <img
              src="https://seeklogo.com/images/O/ofppt-logo-ACD755B3D2-seeklogo.com.png"
              alt="logo"
            />
          </div>
          <h1>Create an account</h1>
          {/* <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}

          <Button type="submit" variant="contained" disableElevation>
            Register
          </Button>
          <button type="submit">Register</button>
          <p>
            Already have an account ?{" "}
            <button onClick={() => navigat("/Login")}>Login</button>
          </p>
          {weak && <ShortPassword />}
          {error && <RandomError />}
          {exist && <ExistAcc />}
        </form>
      </div>
    </div>
  );
}
export default Formpl;
