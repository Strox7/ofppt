import { useState } from "react";
import Header from "../header/Header";
import Sidbar from "../sidbar/Sidbar";
import "./YourInscription.css";
import TemporaryDrawer from "../sidbar/Sidbar2";

import { Outlet } from "react-router-dom";

function SharedLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="Y_inscription">
      <Sidbar />
      <div className="Y_inscription_container">
        <Header onToggleSidebar={handleDrawerOpen} />
        <div className="main-app">
          <TemporaryDrawer
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default SharedLayout;
