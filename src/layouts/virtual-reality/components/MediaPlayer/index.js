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
import MicroEdgeButton from "components/MicroEdgeButton";

// Images
const bgImage =
  "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.info.main, 0.75),
          rgba(gradients.info.state, 0.75)
        )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <MicroEdgeBox p={3} position="relative" lineHeight={0}>
        <MicroEdgeTypography variant="h5" color="white" fontWeight="medium">
          Some Kind Of Blues
        </MicroEdgeTypography>
        <MicroEdgeTypography variant="button" color="white" fontWeight="regular">
          Deftones
        </MicroEdgeTypography>
        <MicroEdgeBox display="flex" mt={6} pt={1}>
          <MicroEdgeBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <MicroEdgeButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_previous</Icon>
              </MicroEdgeButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <MicroEdgeButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>play_arrow</Icon>
              </MicroEdgeButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <MicroEdgeButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_next</Icon>
              </MicroEdgeButton>
            </Tooltip>
          </MicroEdgeBox>
        </MicroEdgeBox>
      </MicroEdgeBox>
    </Card>
  );
}

export default MediaPlayer;
