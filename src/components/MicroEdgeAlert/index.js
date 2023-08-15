/**
=========================================================
* MicroEdge Suite - v1.1
=========================================================

* Product Page: https://www.rishu.fun/product/microedge-dashboard-material-ui
* Copyright 2023 MicroEdge (https://www.rishu.fun)

Coded by www.rishu.fun

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";

// Custom styles for the MicroEdgeAlert
import MicroEdgeAlertRoot from "components/MicroEdgeAlert/MicroEdgeAlertRoot";
import MicroEdgeAlertCloseIcon from "components/MicroEdgeAlert/MicroEdgeAlertCloseIcon";

function MicroEdgeAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MicroEdgeAlertRoot ownerState={{ color }} {...rest}>
        <MicroEdgeBox display="flex" alignItems="center" color="white">
          {children}
        </MicroEdgeBox>
        {dismissible ? (
          <MicroEdgeAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </MicroEdgeAlertCloseIcon>
        ) : null}
      </MicroEdgeAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of MicroEdgeAlert
MicroEdgeAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the MicroEdgeAlert
MicroEdgeAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MicroEdgeAlert;
