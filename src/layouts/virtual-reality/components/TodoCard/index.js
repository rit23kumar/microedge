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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function TodoCard() {
  return (
    <Card>
      <MicroEdgeBox bgColor="dark" variant="gradient">
        <MicroEdgeBox p={3}>
          <MicroEdgeBox display="flex" justifyContent="space-between">
            <MicroEdgeTypography variant="h5" color="white">
              To Do
            </MicroEdgeTypography>
            <MicroEdgeBox textAlign="center" lineHeight={1}>
              <MicroEdgeTypography variant="h1" color="white" fontWeight="bold">
                7
              </MicroEdgeTypography>
              <MicroEdgeTypography variant="button" color="white" fontWeight="regular">
                items
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
          <MicroEdgeTypography variant="body2" color="white" fontWeight="regular">
            Shopping
          </MicroEdgeTypography>
          <MicroEdgeTypography variant="body2" color="white" fontWeight="regular">
            Meeting
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <MicroEdgeBox textAlign="center" color="white" py={0.5} lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </MicroEdgeBox>
        </Tooltip>
      </MicroEdgeBox>
    </Card>
  );
}

export default TodoCard;
