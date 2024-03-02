import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import React from "react";
import { AuthContext } from "./components/context/AuthContext";
import NewPassword from "./components/newpassword/NewPassword";
import Personal from "./components/personel_Info/Personal";
import Inscription from "./components/inscription/Inscription";
import YourInscription from "./components/Your-Inscription/YourInscription";
import Details from "./components/Your-Inscription/Details";
import Detailp from "./components/Your-Inscription/Details";
import SharedLayout from "./components/Your-Inscription/SharedLyout";

function App() {
  const { currentUser } = React.useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/Login" />;
  };
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <HomePage />
              </RequiredAuth>
            }
          ></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/NewPassword" element={<NewPassword />}></Route>
          <Route
            path="/Personal"
            element={
              <RequiredAuth>
                <Personal />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/inscription"
            element={
              <RequiredAuth>
                <Inscription />
              </RequiredAuth>
            }
          ></Route>
          <Route
            path="/Your-inscription"
            element={
              <RequiredAuth>
                <SharedLayout />
              </RequiredAuth>
            }
          >
            <Route index element={<YourInscription />} />

            <Route path="details" element={<Detailp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
