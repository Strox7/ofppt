import "./sidbar.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import LoopIcon from "@mui/icons-material/Loop";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import { useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

export default function TemporaryDrawer({ open, onClose, onOpen }) {
  const [profileImageURL, setProfileImageURL] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    const checker = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // setUid(uid);
        console.log("User UID:", uid);

        // Fetch the profile image URL from Firestore
        const userDoc = doc(db, "users", uid);
        getDoc(userDoc)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setData(userData);
              const fetchedProfileImageURL = userData.profileImageURL;
              console.log(userData);
              console.log("Fetched Profile Image URL:", fetchedProfileImageURL);

              // Set the profile image URL in the component state
              setProfileImageURL(fetchedProfileImageURL);
            }
          })
          .catch((error) => {
            console.error("Error fetching profile data:", error);
          });
      }
    });

    return () => checker();
  }, []);
  const navigat = useNavigate();
  const drawerStyle = {
    width: "300px", // Set the height as per your requirement
    height: "100vh",
    color: "white",
    backgroundColor: "rgb(15, 25, 40)",
  };
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <SwipeableDrawer
        className="drow"
        PaperProps={{ style: drawerStyle }}
        anchor="left"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        {/* Your drawer content goes here */}
        <div className="sidbar">
          <div className="sidbar_header">
            <div className="holder" onClick={() => navigat("/Personal")}>
              <Avatar src={profileImageURL} />
              <h4>{data.fullName}</h4>
            </div>
          </div>
          <div className="sidbar_center">
            <h3>overview</h3>
            <div className="item" onClick={() => navigat("/")}>
              <DashboardCustomizeOutlinedIcon />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <MessageOutlinedIcon />
              <span>Message</span>
            </div>
            <div className="item" onClick={() => navigat("/Your-inscription")}>
              <AssignmentOutlinedIcon />
              <span>Inscription</span>
            </div>
            <div className="item" onClick={() => navigat("/NewPassword")}>
              <LockResetOutlinedIcon />
              <span>New Password</span>
            </div>
            <div className="item" onClick={() => navigat("/Personal")}>
              <FolderOutlinedIcon />
              <span>Personal information</span>
            </div>
            <div className="item" onClick={() => navigat("/inscription")}>
              <LoopIcon />
              <span>New inscription</span>
            </div>
          </div>
          <div className="sidbar_footer">
            <h3>Account</h3>
            <div className="item">
              <SettingsOutlinedIcon />
              <span>Settings</span>
            </div>
            <div className="item">
              <LogoutOutlinedIcon />
              <span> Log out</span>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
