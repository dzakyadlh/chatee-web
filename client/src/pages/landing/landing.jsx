import React from "react";
import useLocalStorage from "use-local-storage";

import Navbar from "../../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faGear } from "@fortawesome/free-solid-svg-icons";
import Chatting from "../../assets/images/chatting.png";
import QRCode from "../../assets/images/linkdevqr.png";
import "./landing.css";

const Landing = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  return (
    <React.Fragment>
      <Navbar />
      <main className="landingContainer scrollContainer" data-theme={theme}>
        <section className="landingOpening">
          <div className="landingOpeningLeft">
            <img
              className="landingOpeningImage"
              src={Chatting}
              alt="chatting illustration"
            />
          </div>
          <div className="landingOpeningRight">
            <h1>
              Break the boundaries and connect with people all over the world
            </h1>
            <button className="btnFill btnGetStarted">Get Started</button>
          </div>
        </section>
        <section className="landingLinkDevice">
          <div className="landingLinkDeviceLeft">
            <h5>Link to your phone device</h5>
            <ol className="landingLinkDeviceProcedure" type="1">
              <li className="linkDeviceStep">Open Chatee on your phone</li>
              <li className="linkDeviceStep">
                Go to settings by clicking on <b>Menu</b>{" "}
                <span className="inlineIcon">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>{" "}
                , then <b>Settings</b>{" "}
                <span className="inlineIcon">
                  <FontAwesomeIcon icon={faGear} />
                </span>
              </li>
              <li className="linkDeviceStep">
                Search for <b>Linked devices</b> and then click{" "}
                <b>Link a device</b>
              </li>
              <li className="linkDeviceStep">
                Scan the QR code on this screen and proceed
              </li>
            </ol>
          </div>
          <div className="landingLinkDeviceRight">
            <img className="linkDeviceQRCode" src={QRCode} alt="QR Code" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Landing;
