import { useState } from "react";
import Header from "../header/Header";
// import NewPassword from "../newpassword/NewPassword";
import Sidbar from "../sidbar/Sidbar";
import "./homePage.css";
import Calendar from "./Calendar";
// import Tables from "../table/Table";

// import Charty from "../chart/RadarChart";
import StatisticsChart from "../chart/RadarChart";
import Chart2 from "../chart/Chart2";
import Tables from "../table/Table";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import TopPerforming from "./TopPerforming";
import TemporaryDrawer from "../sidbar/Sidbar2";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { onAuthStateChanged } from "firebase/auth";
function HomePage() {
  const [data, setUserData] = useState("");
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Step 2: Create Toggle Function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="homePage">
      <Sidbar isOpen={isSidebarOpen} />

      <div className="home-container">
        <Header onToggleSidebar={handleDrawerOpen} />
        {/* <NewPassword /> */}
        <div className="main-app">
          <div className="container">
            <h1 className="styled_h2">Dashboard</h1>
            {/* <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                OFPPT
              </Link>
              <Link
                underline="hover"
                href="/material-ui/getting-started/installation/"
                aria-current="page"
              >
                DASHBOARD
              </Link>
            </Breadcrumbs> */}
            <div className="volder">
              <div className="welcome">
                <div className="text">
                  <div className="data">
                    <h3>
                      Welcome Back, <span>{data.username}</span>
                    </h3>
                    <div className="content">
                      <span>Upcomming Session</span>
                      <p className="p_tag">
                        <span>AM</span>
                        <span>8:30 - 1:30</span>
                        <span>M102</span>
                      </p>
                    </div>
                    <button>Join</button>
                  </div>

                  <div className="image">
                    <img src="/welcomev2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="calendar">
                <Calendar />
              </div>
            </div>

            <div className="cable">
              <div className="item_2">
                <h2 className="styled_h2">Performance</h2>
                <StatisticsChart />
              </div>
              <div className="item_3">
                <h2 className="styled_h2">Statistics</h2>
                <Chart2 />
              </div>
            </div>
            <div className="cable_2">
              <div className="iteem_1">
                <h2 className="styled_h2">Students List</h2>
                <Tables />
              </div>
              <div className="capo">
                <div className="iteem_2">
                  <h2 className="styled_h2">Personality</h2>
                  <div className="boxx">
                    <div className="content">
                      <LightbulbOutlinedIcon />
                      <h3>Entrepreneur</h3>
                    </div>
                    <BorderLinearProgress variant="determinate" value={99} />
                  </div>
                  <div className="boxx">
                    <div className="content">
                      <WorkOutlineOutlinedIcon />
                      <h3>Investigator</h3>
                    </div>

                    <BorderLinearProgress variant="determinate" value={95} />
                  </div>
                  <div className="boxx">
                    <div className="content">
                      <Diversity1OutlinedIcon />
                      <h3>Social</h3>
                    </div>

                    <BorderLinearProgress variant="determinate" value={90} />
                  </div>
                  <div className="boxx">
                    <div className="content">
                      <InventoryOutlinedIcon />
                      <h3>Conventional</h3>
                    </div>

                    <BorderLinearProgress variant="determinate" value={85} />
                  </div>
                  <div className="boxx">
                    <div className="content">
                      <ColorLensOutlinedIcon />
                      <h3>Artiste</h3>
                    </div>

                    <BorderLinearProgress variant="determinate" value={80} />
                  </div>
                  <div className="boxx">
                    <div className="content">
                      <CrisisAlertOutlinedIcon />
                      <h3>Realistic</h3>
                    </div>

                    <BorderLinearProgress variant="determinate" value={70} />
                  </div>
                </div>
                <div className="iteem_3">
                  <h2 className="styled_h2">Top Performing</h2>
                  <TopPerforming />
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
    </div>
  );
}
export default HomePage;
