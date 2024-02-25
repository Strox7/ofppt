import { useMediaQuery } from "react-responsive";
import DesktopV from "./DesktopV";
import "./YourInscription.css";
import MobileV from "./mobileV";

function Detailp() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <div className="container">
      <h1 className="styled_h2">Upload Files</h1>
      {isMobile ? <MobileV /> : <DesktopV />}
    </div>
  );
}

export default Detailp;
