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

// MicroEdge Suite components
import MicroEdgeTypography from "components/MicroEdgeTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-mobile-button" style={{ fontSize: "12px" }} />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <MicroEdgeTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </MicroEdgeTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tag" style={{ fontSize: "12px" }} />,
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <MicroEdgeTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </MicroEdgeTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-box-2" style={{ fontSize: "12px" }} />,
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <MicroEdgeTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </MicroEdgeTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-satisfied" style={{ fontSize: "12px" }} />,
    name: "Happy Users",
    description: (
      <>
        <MicroEdgeTypography variant="caption" color="text" fontWeight="medium">
          +&nbsp;430
        </MicroEdgeTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
