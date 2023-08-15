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

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";

// MicroEdge Suite example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// MicroEdge Suite context
import { useMicroEdgeController, setMiniSidenav, setLayout, setDarkSidenav } from "context";

// MicroEdge Suite routes
import routes from "routes";

// Custom styles for the BaseLayout
import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/virtual-reality/components/BaseLayout/styles";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

function BaseLayout({ children }) {
  const [controller, dispatch] = useMicroEdgeController();
  const { miniSidenav, sidenavColor, darkSidenav, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setDarkSidenav(dispatch, darkMode);
  }, [pathname]);

  return (
    <MicroEdgeBox sx={baseLayout}>
      <MicroEdgeBox bgColor={darkMode ? "transparent" : "info"} borderRadius="xl" mt={3} mx={3}>
        <DashboardNavbar />
      </MicroEdgeBox>
      <MicroEdgeBox sx={baseLayoutBackground}>
        <MicroEdgeBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName="MicroEdge Suite PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </MicroEdgeBox>
        <MicroEdgeBox sx={baseLayoutContent}>
          <MicroEdgeBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              color={sidenavColor}
              brand={darkSidenav || darkMode ? brand : brandDark}
              brandName="MicroEdge Suite PRO"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </MicroEdgeBox>
          <DashboardLayout bgColor="transparent">{children}</DashboardLayout>
        </MicroEdgeBox>
      </MicroEdgeBox>
      <MicroEdgeBox pb={2} pt={0.25}>
        <Footer />
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
