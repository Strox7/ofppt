import { useState } from "react";
import Header from "../header/Header";
import Sidbar from "../sidbar/Sidbar";
import "./YourInscription.css";
import TemporaryDrawer from "../sidbar/Sidbar2";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import TableColumnPinning from "./InscTable";
import { Outlet } from "react-router-dom";

function YourInscription() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <h1 className="styled_h2">Your Inscription</h1>
      {/* <Box
              sx={{
                flexGrow: 1,
                m: -2,
                overflowX: "hidden",
                marginTop: "50px",
              }}
            >
              <Tabs
                aria-label="Pipeline"
                value={index}
                onChange={(event, value) => setIndex(value)}
                sx={{ backgroundColor: "#0f1928 !important" }}
              >
                <TabList
                  sx={{
                    pt: 1,
                    justifyContent: "center",
                    [`&& .${tabClasses.root}`]: {
                      color: "white",
                      flex: "initial",
                      bgcolor: "transparent",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#1976d2",
                        border: "none",
                      },
                      [`&.${tabClasses.selected}`]: {
                        color: "primary.plainColor",
                        "&::after": {
                          height: 2,
                          borderTopLeftRadius: 3,
                          borderTopRightRadius: 3,
                          bgcolor: "primary.500",
                        },
                      },
                    },
                  }}
                >
                  <Tab indicatorInset>Inscription Details </Tab>
                  <Tab indicatorInset>Required documents</Tab>
                </TabList>
                <Box
                  sx={(theme) => ({
                    "--bg": "#0f1928",
                    background: "var(--bg)",
                    boxShadow: "0 0 0 100vmax var(--bg)",
                    clipPath: "inset(0 -100vmax)",
                  })}
                >
                  <TabPanel sx={{ color: "white" }} value={0}>
                    Deals hello
                  </TabPanel>
                  <TabPanel sx={{ color: "white" }} value={1}>
                    Library
                  </TabPanel>
                </Box>
              </Tabs>
            </Box> */}
      <TableColumnPinning />
    </div>
  );
}
export default YourInscription;
