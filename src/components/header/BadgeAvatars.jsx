// import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

export default function BadgeAvatars() {
  const [profileImageURL, setProfileImageURL] = useState("");
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
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={profileImageURL} />
      </StyledBadge>
    </Stack>
  );
}
