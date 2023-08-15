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

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

import { useMicroEdgeController } from "context";

function TodoList() {
  const [controller] = useMicroEdgeController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <MicroEdgeBox p={3}>
        <MicroEdgeBox display="flex" lineHeight={1}>
          <MicroEdgeBox mr={2}>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              08:00
            </MicroEdgeTypography>
          </MicroEdgeBox>
          <MicroEdgeBox>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </MicroEdgeTypography>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <Divider />
        <MicroEdgeBox display="flex" lineHeight={0}>
          <MicroEdgeBox mr={2}>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              09:30
            </MicroEdgeTypography>
          </MicroEdgeBox>
          <MicroEdgeBox>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              Gym
            </MicroEdgeTypography>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <Divider />
        <MicroEdgeBox display="flex" lineHeight={1}>
          <MicroEdgeBox mr={2}>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              11:00
            </MicroEdgeTypography>
          </MicroEdgeBox>
          <MicroEdgeBox>
            <MicroEdgeTypography variant="h6" fontWeight="medium">
              Design Review
            </MicroEdgeTypography>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
      </MicroEdgeBox>
      <MicroEdgeBox bgColor={darkMode ? "transparent" : "grey-100"} mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <MicroEdgeBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </MicroEdgeBox>
        </Tooltip>
      </MicroEdgeBox>
    </Card>
  );
}

export default TodoList;
