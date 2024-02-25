import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Badge from "@mui/material/Badge";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
export default function Notif() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          minWidth: "0 !important",
          padding: "0",
          "&:hover": { backgroundColor: "transparent", boxShadow: "none" },
          "&:focus": { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <Badge badgeContent={1} color="primary">
          <NotificationsNoneOutlinedIcon sx={{ fontSize: "1.5rem" }} />
        </Badge>
      </Button>
      <Popover
        sx={{
          "& .css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
            marginTop: "25px !important",

            width: "260px !important",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 2, display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <span
            style={{
              fontWeight: "700",
              fontSize: "12px",
              letterSpacing: "0px",
              display: "flex",
              gap: "6px",
              alignItems: "center",
              flexDirection: "row-reverse",
              paddingBottom: "10px",
              borderBottom: "1px solid #ececec",
              justifyContent: "space-between",
            }}
          >
            <AnnouncementIcon
              sx={{ color: "rgb(25, 118, 210)", fontSize: "20px" }}
            />
            Announcement
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "12px",
              margin: "0",
              justifyContent: "space-between",
            }}
          >
            <div
              className="holder"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Avatar src="zahraoui.jpeg" />
              <h5
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0",
                  fontSize: "9px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Issam Zahraoui
                <span
                  style={{
                    color: "#1976d2",
                    fontSize: "9px",
                    fontWeight: "900",
                    letterSpacing: "0px",
                    textTransform: "math-auto",
                  }}
                >
                  Teacher
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    marginTop: "5px",
                    textTransform: "initial",
                    maxWidth: "133px",
                    color: "gray",
                    fontWeight: "500",
                  }}
                >
                  Bounjour a tous gheda rah kayn fard men 11:30 l 1:30
                </span>
              </h5>
            </div>

            {/* <Badge variant="dot" color="error">
              <ChatIcon sx={{ color: "#1976d2" }} />
            </Badge> */}
            <span style={{ fontSize: "9px", color: "gray" }}>5 hours</span>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
