import { Button } from "@mui/joy";
import Header from "../header/Header";
import Sidbar from "../sidbar/Sidbar";
import City from "./inputs/City";
import EduLevel from "./inputs/EduLevel";
import FirstC from "./inputs/FirstC";
import SecondC from "./inputs/SecondC";
import ThirdC from "./inputs/ThirdC";
import Establish from "./inputs/establi";
import "./inscription.css";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import TemporaryDrawer from "../sidbar/Sidbar2";
import { useState } from "react";

function Inscription() {
  const [selectedCity, setSelectedCity] = useState(null);
  const handleCitySelect = (selectedCity) => {
    setSelectedCity(selectedCity);
    setSelectedCity({ label: selectedCity.label });
    console.log(`Selected city: ${selectedCity.label}`);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="inscription">
      <Sidbar />
      <div className="inscription_container">
        <Header onToggleSidebar={handleDrawerOpen} />
        <div className="main-app">
          <h1 className="styled_h2">Inscription</h1>
          <div className="container">
            <div className="box">
              <img src="ofpptL2.png" alt="" />
              <h2> Your Future begins here </h2>
              <p>Please ! fill the inputs below here</p>
              <div className="holder">
                <div className="input_Wrapper">
                  <City onSelectCity={handleCitySelect} />
                  <Establish />
                </div>
                <div className="input_Wrapper">
                  <EduLevel />
                  <FirstC />
                </div>
                <div className="input_Wrapper">
                  <SecondC />
                  <ThirdC />
                </div>
              </div>

              <div className="buttons">
                <Button
                  sx={{
                    color: "white",
                    width: "160px",
                    "&:hover": {
                      backgroundColor: "transparent ",
                      color: "#1976d2",
                      border: "1px solid #1976d2",
                    },
                  }}
                  variant="outlined"
                >
                  Cancel
                </Button>
                <Button sx={{ width: "160px" }} variant="solid">
                  Save
                </Button>
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
export default Inscription;
