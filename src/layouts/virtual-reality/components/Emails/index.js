/**
=========================================================
* MicroEdge Suite - v1.1
=========================================================

* Product Page: https://www.rishu.fun/product/argon-dashboard-material-ui
* Copyright 2023 MicroEdge (https://www.rishu.fun)

Coded by www.rishu.fun

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function Emails() {
  return (
    <Card>
      <MicroEdgeBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <MicroEdgeTypography variant="body2" color="text">
          Emails (21)
        </MicroEdgeTypography>
        <Tooltip title="Check your emails" placement="top">
          <MicroEdgeBox component="a" href="#">
            <MicroEdgeTypography variant="body2">Check</MicroEdgeTypography>
          </MicroEdgeBox>
        </Tooltip>
      </MicroEdgeBox>
    </Card>
  );
}

export default Emails;
