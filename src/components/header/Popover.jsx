import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Badge from "@mui/material/Badge";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar } from "@mui/material";
export default function Popove() {
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
        <Badge badgeContent={4} color="primary">
          <EmailOutlinedIcon sx={{ fontSize: "1.5rem" }} />
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
            <ChatIcon sx={{ color: "rgb(25, 118, 210)", fontSize: "20px" }} />
            Messages
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
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar />
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
                Afarid Badr
                <span
                  style={{
                    color: "#1976d2",
                    fontSize: "9px",
                    fontWeight: "900",
                    letterSpacing: "0px",
                    textTransform: "math-auto",
                  }}
                >
                  Sent you a message
                </span>
              </h5>
            </div>

            {/* <Badge variant="dot" color="error">
              <ChatIcon sx={{ color: "#1976d2" }} />
            </Badge> */}
            <span style={{ fontSize: "9px", color: "gray" }}>5 min</span>
          </div>
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
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar src="moghit.jpg" />
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
                BABA ALI ABDELMOUGHIT
                <span
                  style={{
                    color: "#1976d2",
                    fontSize: "9px",
                    fontWeight: "900",
                    letterSpacing: "0px",
                    textTransform: "math-auto",
                  }}
                >
                  Sent you a message
                </span>
              </h5>
            </div>

            {/* <Badge variant="dot" color="error">
              <ChatIcon sx={{ color: "#1976d2" }} />
            </Badge> */}
            <span style={{ fontSize: "9px", color: "gray" }}>1 hour</span>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
