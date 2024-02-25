import "./personal.css";
import * as React from "react";
import { Avatar, InputAdornment, Slide, TextField } from "@mui/material";

import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { AccountCircle } from "@mui/icons-material";
import Sidbar from "../sidbar/Sidbar";
import Header from "../header/Header";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Sneaky from "../alerts/Sneaky";
import RandomError from "../alerts/RandomError";
import EditField from "../alerts/EditField";
import ChangeData from "./ChangeData";
import { useRef } from "react";
import InputPop from "./InputPop";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import TemporaryDrawer from "../sidbar/Sidbar2";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { auth, db, storage } from "../../firebase";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  getDoc,
  deleteField,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SnackbarInvertedColors from "./SnackbarInvertedColor";
import Typography from "@mui/joy/Typography";

function Personal() {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // You can customize the severity (success, error, warning, info)
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [loading, setLoading] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [uid, setUid] = useState("");
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const [buttonVisible, setbuttonVisible] = useState(true);
  const [profileImageURL, setProfileImageURL] = useState("");

  useEffect(() => {
    const checker = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
        console.log("User UID:", uid);

        // Fetch the profile image URL from Firestore
        const userDoc = doc(db, "users", uid);
        getDoc(userDoc)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              const fetchedProfileImageURL = userData.profileImageURL;
              setInputData({
                FullName: userData.fullName || "",
                Email: userData.email || "",
                Adress: userData.adress || "",
                Country: userData.country || "",
                Phone: userData.tel || "",
                Password: userData.password || "", // You might want to handle password differently for security reasons
              });
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

  const handleButtonClick = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log("User UID:", uid);

        // Now you can use this UID to perform actions, such as updating Firestore

        const uploadFileAndUpdateProfile = async (selectedFile) => {
          const storageRef = ref(storage, selectedFile.name);
          const uploadTask = uploadBytesResumable(storageRef, selectedFile);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Handle upload progress
              setSuccess(false);
              setLoading(true);
            },
            (error) => {
              // Handle upload error
            },
            async () => {
              // Upload completed successfully, get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              // Update Firestore with the download URL using the user UID
              const userDoc = doc(db, "users", uid);
              await updateDoc(userDoc, {
                profileImageURL: downloadURL,
              });
              setSuccess(true);
              setLoading(false);

              timer.current = window.setTimeout(() => {
                setbuttonVisible(false);
              }, 2000);

              setTimeout(() => {
                window.location.reload();
              }, 3000);
              setProfileImageURL(downloadURL);
              // if (!loading) {
              //   setSuccess(false);

              //   setTimeout(() => {

              //   }, 4000);
              // }
            }
          );
        };

        // Example usage

        /* your File object */
        selectedFile && uploadFileAndUpdateProfile(selectedFile);

        // Don't forget to unsubscribe to the listener when you no longer need it
        unsubscribe();
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });
  };

  const deleteProfile = () => {
    setisLoading(true);
    const unsibscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const cityRef = doc(db, "users", uid);

        // Remove the 'capital' field from the document
        updateDoc(cityRef, {
          profileImageURL: deleteField(),
        })
          .then(() => {
            console.log("deleted seccessfuly");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
        unsibscribe();
      }
    });
  };

  const UpdateUserData = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log("User UID:", uid);

        // Now you can use this UID to perform actions, such as updating Firestore

        // Update Firestore with the user data using the user UID
        const userDoc = doc(db, "users", uid);
        updateDoc(userDoc, {
          fullName: inputData.FullName,
          email: inputData.Email,
          adress: inputData.Adress,
          country: inputData.Country,
          tel: inputData.Phone,
          // You might want to handle password differently for security reasons
          password: inputData.Password,
        })
          .then(() => {
            console.log("User data updated successfully");
            handleDrawerlose();
            setSnackbarMessage("User data updated successfully");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);

            setTimeout(() => {
              window.location.reload();
            }, 2000);
            // Additional logic or feedback if needed
          })
          .catch((error) => {
            console.error("Error updating user data:", error);
            // Handle errors or provide feedback to the user
          });

        // Don't forget to unsubscribe to the listener when you no longer need it
        unsubscribe();
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });
  };

  const { dispatch } = React.useContext(AuthContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const [inputData, setInputData] = useState({
    FullName: "",
    Email: "",
    Adress: "",
    Country: "",
    Phone: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [selectedInput, setSelectedInput] = useState(null);
  const renderDrawerContent = () => {
    if (selectedInput) {
      return (
        <FormControl>
          <FormLabel sx={{ color: "white" }}>{selectedInput}</FormLabel>
          <Input
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "navajowhite",
              borderBottom: "1px solid white",
              borderRadius: "0",
              outline: "none",
              "--Input-focusedHighlight": "none !important",
            }}
            name={selectedInput}
            value={inputData[selectedInput]}
            autoFocus
            onChange={handleInputChange}
          />
        </FormControl>
      );
    } else if (!selectedInput) {
      return (
        <>
          <h3 style={{ position: "absolute", top: "0", color: "white" }}>
            Profile Photo
          </h3>
          <div
            className="edite_wrapper"
            style={{
              position: "absolute",
              bottom: "33px",
              color: "white",
              display: "flex",
              gap: "35px",
            }}
          >
            <div
              className="box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <Button
                onClick={handleAvatarClick}
                sx={{
                  border: "1px solid #1976d2",
                  padding: "11px",
                  borderRadius: "50%",
                  minWidth: "52px",
                  height: "50px",
                }}
              >
                <ImageIcon
                  sx={{
                    color: "#1976d2",
                  }}
                />
              </Button>
              <span>Galerie</span>
            </div>
            <div
              className="box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <Button
                onClick={() => setOpen(true)}
                sx={{
                  border: "1px solid #1976d2",
                  padding: "11px",
                  borderRadius: "50%",
                  minWidth: "52px",
                  height: "50px",
                }}
              >
                <DeleteIcon
                  sx={{
                    color: "#1976d2",
                  }}
                />
              </Button>

              <span>Delete</span>
            </div>
          </div>
        </>
      );
    }
  };
  const drawerStyle = {
    height: "120px", // Set the height as per your requirement
    padding: "30px 20px 50px",
    backgroundColor: "rgb(15, 25, 40)",
  };

  // Apply left positioning only for screens wider than 600px
  if (window.innerWidth >= 992) {
    drawerStyle.left = "300px"; // Set the left position as per your requirement
  }
  const [isEdit, setIsEdit] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const inputRef = useRef(null);

  const handleToggleEdit = (input) => {
    setIsEdit(!isEdit);
    setSelectedInput(input);
    setDrawerOpen(true);
  };

  const handleDrawerpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerlose = () => {
    setDrawerOpen(false);
    setSelectedInput(null);
  };

  // const handleAvatarClick = () => {
  //   handleDrawerlose(); // Close the drawer when clicking on the avatar
  //   handleToggleEdit(); // Toggle the edit mode
  // }; ²&

  const CustomFab = styled(Fab)({
    position: "absolute",
    bottom: "35px",
    right: "23px",
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#135592", // Change the color on hover
    },
  });
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [isReadOnly, setIsReadOnly] = React.useState(true);

  // const handleButtonClick = () => {
  //   setIsReadOnly(false);
  // };

  // Step 2: Create Toggle Function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }

    if (file) {
      // Update state with the selected file
      setSelectedFile(file);
    }
  };

  const handleAvatarClick = () => {
    // Trigger the input click when the avatar is clicked
    inputRef.current.value = "";
    inputRef.current.click();
  };

  const [userData, setUserData] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userDoc = doc(db, "users", uid);

        // Fetch user data
        const fetchData = async () => {
          const docSnap = await getDoc(userDoc);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
          }
        };

        fetchData();
      }
    });

    return () => unsubscribe();
  }, []);

  console.log("Final UserData:", userData);
  if (!userData) {
    return (
      <div className="personal">
        <Sidbar />
        <div className="personal-container">
          <Header onToggleSidebar={handleDrawerOpen} />
          <div className="main-app">
            <h1 className="styled_h2" style={{ marginLeft: "15px" }}>
              Profile
            </h1>
            <div className="container">
              <div className="avatar_holder">
                <Skeleton
                  variant="circular"
                  width={150}
                  height={150}
                  sx={{ backgroundColor: "gray" }}
                />
                <div
                  className="avatar_da"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ backgroundColor: "gray" }}
                    className="changer2"
                    width={210}
                    height={30}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ backgroundColor: "gray" }}
                    className="changer2"
                    width={50}
                    height={30}
                  />
                  <Skeleton
                    className="changer"
                    variant="rounded"
                    width={510}
                    height={60}
                    sx={{ backgroundColor: "gray" }}
                  />
                  <div className="scelo-buttons">
                    <Skeleton
                      variant="rounded"
                      sx={{ backgroundColor: "gray" }}
                      width={150}
                      height={38}
                    />
                    <Skeleton
                      variant="rounded"
                      width={150}
                      height={38}
                      sx={{ backgroundColor: "gray" }}
                    />
                  </div>
                </div>
              </div>

              {/* For variant="text", adjust the height via font-size */}
              {/* <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", backgroundColor: "gray" }}
                /> */}
              <div className="input_holder changer3">
                <div className="input_wrappe changer3">
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                </div>
                <div className="input_wrappe changer3">
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={250}
                    height={50}
                    sx={{ backgroundColor: "gray" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <TemporaryDrawer
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="personal">
      <Sidbar isOpen={isSidebarOpen} />
      <div className="personal-container">
        <Header onToggleSidebar={handleDrawerOpen} />
        {!isReadOnly && <EditField />}
        <div className="main-app">
          <h1 className="styled_h2" style={{ marginLeft: "15px" }}>
            Profile
          </h1>
          <div className="container">
            <div className="avatar_holder">
              <div
                className="avatar_hold"
                style={{ position: "relative", cursor: "pointer" }}
              >
                <span className="styled_holder" onClick={handleDrawerpen}>
                  {" "}
                  {/* <EditIcon /> */}
                  <CameraAltIcon sx={{ fontSize: "18px" }} />
                </span>
                <Avatar
                  sx={{ width: "150px", height: "150px" }}
                  onClick={handleDrawerpen}
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : profileImageURL
                      ? profileImageURL
                      : "fallback_image_url"
                  }
                />
              </div>

              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={inputRef}
                onChange={handleFileChange}
              />
              <div className="avatar_data">
                <h2>{userData.fullName}</h2>
                <h5>Student</h5>
                <div className="avatar_content">
                  <div className="box">
                    <span
                      style={{ color: "#b5b1b1", fontWeight: "bold" }}
                      className="text_holder"
                    >
                      Articles
                      <span>34</span>
                    </span>
                    <span
                      style={{ color: "#b5b1b1", fontWeight: "bold" }}
                      className="text_holder"
                    >
                      Followers
                      <span>230</span>
                    </span>
                    <span
                      style={{ color: "#b5b1b1", fontWeight: "bold" }}
                      className="text_holder"
                    >
                      Rating
                      <span>8.9</span>
                    </span>
                  </div>
                </div>
                <div
                  className="avatar-buttons"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <Button
                    sx={{
                      width: "50%",
                      color: "white",
                      border: "1px solid white",
                      "&:focus": {
                        border: "1px solid #1976d2",
                      },
                      "&:hover": {
                        border: "1px solid #1976d2",
                      },
                    }}
                  >
                    Chat
                  </Button>
                  <Button
                    sx={{
                      width: "50%",
                      color: "white",

                      backgroundColor: "#1976d2",
                      "&:focus": {
                        backgroundColor: "#13487d",
                      },
                      "&:hover": {
                        backgroundColor: "#13487d",
                      },
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </div>
              {/* <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload img
                <VisuallyHiddenInput type="file" />
              </Button> */}
            </div>
            <div className="input_holder">
              <div className="input_wrappe">
                <TextField
                  id="input-with-icon-textfield"
                  label="Full Name"
                  // placeholder="Mostafa Bouhanout"
                  defaultValue={userData.fullName}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle
                          sx={{ color: "white", marginTop: "-26px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("FullName")}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  defaultValue={userData.email}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon sx={{ color: "white", marginTop: "-26px" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("Email")}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Adress"
                  defaultValue={userData.adress}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon
                          sx={{ color: "white", marginTop: "-26px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("Adress")}
                />
              </div>
              <div className="input_wrappe">
                <TextField
                  id="input-with-icon-textfield"
                  label="Country"
                  defaultValue={userData.country}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlagIcon sx={{ color: "white", marginTop: "-26px" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("Country")}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Phone"
                  defaultValue={userData.tel}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: isReadOnly,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon
                          sx={{ color: "white", marginTop: "-26px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("Phone")}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Password"
                  defaultValue={userData.password}
                  InputLabelProps={{
                    sx: { color: "white", marginLeft: "32px" }, // Set the color of the label text to white
                  }}
                  InputProps={{
                    sx: { color: "white" },
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockPersonIcon
                          sx={{ color: "white", marginTop: "-26px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  onClick={() => handleToggleEdit("Password")}
                />
              </div>
            </div>
          </div>
          {/* <CustomFab
            onClick={handleButtonClick}
            aria-label="edit"
            sx={{
              position: "absolute",
              bottom: "35px",
              right: "23px",
              backgroundColor: "#1976d2",
              color: "white",
            }}
          >
            <EditIcon />
          </CustomFab> */}
          {/* <ChangeData /> */}
        </div>
        <div></div>
        <SwipeableDrawer
          anchor="bottom"
          open={drawerOpen}
          onClose={handleDrawerlose}
          onOpen={handleDrawerpen}
          PaperProps={{ style: drawerStyle }}
        >
          {/* Your drawer content goes here */}
          <Box p={2}>
            {selectedInput ? (
              <>
                {renderDrawerContent()}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "22px",
                    marginBottom: "10px",
                  }}
                  direction="row"
                  spacing={1}
                >
                  <Button onClick={handleDrawerlose}>Cancel</Button>
                  <Button onClick={UpdateUserData}>Save</Button>
                </Box>
              </>
            ) : (
              renderDrawerContent()
            )}

            {/* <Stack
              sx={{ position: "absolute", top: "10px", right: "6px" }}
              direction="row"
              spacing={1}
            >
              <IconButton aria-label="fingerprint" color="error">
                <CancelRoundedIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton aria-label="fingerprint" color="success">
                <CheckCircleRoundedIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Stack> */}
            {/* {!selectedInput ? <div>hello</div> : null} */}
          </Box>
        </SwipeableDrawer>
        <TemporaryDrawer
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
        />

        {selectedFile && buttonVisible === false ? (
          <Box
            sx={{
              display: "none",
              alignItems: "center",
              flexDirection: "row-reverse",
              position: "fixed",
              bottom: "20px",
              right: "15px",
            }}
          >
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonSx}
                onClick={handleButtonClick}
              >
                {success ? <CheckIcon /> : <SaveIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
              >
                Save chnages
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        ) : (
          selectedFile &&
          buttonVisible === true && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",

                position: "fixed",
                bottom: "20px",
                right: "15px",
              }}
            >
              <Box sx={{ m: 1, position: "relative" }}>
                <Fab
                  aria-label="save"
                  color="primary"
                  sx={buttonSx}
                  onClick={handleButtonClick}
                >
                  {success ? <CheckIcon /> : <SaveIcon />}
                </Fab>
                {loading && (
                  <CircularProgress
                    size={68}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: -6,
                      left: -6,
                      zIndex: 1,
                    }}
                  />
                )}
              </Box>
              <Box sx={{ m: 1, position: "relative" }}>
                <Button
                  variant="contained"
                  sx={buttonSx}
                  disabled={loading}
                  onClick={handleButtonClick}
                >
                  {success ? "Saved Successfully" : "Save chnages"}
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
              </Box>
            </Box>
          )
        )}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          TransitionComponent={Slide}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
        <React.Fragment>
          <Snackbar
            // autoHideDuration={5000}
            TransitionComponent={Slide}
            // variant="solid"
            // color="primary"
            // size="lg"
            // invertedColors
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{
              // background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
              backgroundColor: "#1976d2",
              borderRadius: "7px",
              padding: "25px",
              maxWidth: 360,
            }}
          >
            <div>
              <Typography level="title-lg" sx={{ color: "white" }}>
                Hey, Wait!!
              </Typography>
              <Typography sx={{ mt: 1, mb: 2, color: "white" }}>
                Are you sure you want to delete your profile picture?
              </Typography>
              <Stack
                direction="row"
                sx={{ justifyContent: "center" }}
                spacing={1}
              >
                <Button
                  variant="solid"
                  color="primary"
                  onClick={deleteProfile}
                  sx={{
                    backgroundColor: "white",
                    color: "#1976d2",
                    "&:hover": { color: "#1976d2", backgroundColor: "white" },
                  }}
                >
                  {isLoading ? (
                    <>
                      Loading{" "}
                      <CircularProgress
                        size={20}
                        style={{ marginLeft: 10, color: "#1976d2" }}
                      />
                    </>
                  ) : (
                    "Delete"
                  )}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setOpen(false)}
                  sx={{ border: "1px solid white", color: "white" }}
                >
                  Cancel
                </Button>
              </Stack>
            </div>
          </Snackbar>
        </React.Fragment>
      </div>
    </div>
  );
}

export default Personal;
