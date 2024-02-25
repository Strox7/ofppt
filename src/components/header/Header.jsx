import "./header.css";
import PropTypes from "prop-types";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Badge from "@mui/material/Badge";

import BadgeAvatars from "./BadgeAvatars";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { Modal } from "@mui/material";

import Popove from "./Popover";
import Notif from "./Notif";

function Header({ onToggleSidebar }) {
  const { dispatch } = React.useContext(AuthContext);
  const auth = getAuth();
  const logout = () => {
    setAnchorEl(null);
    setpen(true);
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          dispatch({ type: "LOGOUT" });
        }, 1000);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const location = useLocation();
  const [pen, setpen] = React.useState(false);
  const handlelose = () => {
    setpen(false);
  };
  const handlepen = () => {
    setpen(true);
  };
  const navigat = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (prop) => {
    if (
      (prop === "/Personal" && location.pathname === "/Personal") ||
      (prop === "/" && location.pathname === "/")
    ) {
      console.log("Setting pen to false");
      navigat(null);
      setpen(false);
    } else {
      setpen(true);
    }
    setAnchorEl(null);
    setTimeout(() => {
      navigat(prop);
    }, 0.1);
  };

  const condition = (prop) => {
    if ((prop === "/" && location.pathname) === "/") {
      console.log("Setting pen to false");
      navigat(null);
      setpen(false);
    } else {
      setTimeout(() => {
        navigat(prop);
      }, 0.1);
      setpen(true);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="image">
          <button onClick={onToggleSidebar} className="icon">
            <MenuIcon sx={{ color: "white" }} />
          </button>

          <img
            onClick={() => condition("/")}
            src="https://seeklogo.com/images/O/ofppt-logo-ACD755B3D2-seeklogo.com.png"
            alt="logo"
          />
        </div>
        <div className="icons">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
              gap: "17px",
            }}
          >
            {/* <Badge badgeContent={4} color="primary">
              <EmailOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </Badge> */}
            {/* <Poper /> */}
            <Popove />
            <Notif />
          </span>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <BadgeAvatars />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose("/Personal")}>
              Profile
            </MenuItem>
            <MenuItem onClick={() => handleClose("/")}>Dashboard</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={pen}
        onClick={handlelose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

Header.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
};
export default Header;
