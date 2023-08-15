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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeButton from "components/MicroEdgeButton";

// MicroEdge Suite base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

function PaymentMethod() {
  const { borderWidth, borderColor } = borders;

  return (
    <Card id="delete-account">
      <MicroEdgeBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MicroEdgeTypography variant="h6" fontWeight="medium">
          Payment Method
        </MicroEdgeTypography>
        <MicroEdgeButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Add New Card
        </MicroEdgeButton>
      </MicroEdgeBox>
      <MicroEdgeBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MicroEdgeBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <MicroEdgeBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <MicroEdgeTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </MicroEdgeTypography>
              <MicroEdgeBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </MicroEdgeBox>
            </MicroEdgeBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MicroEdgeBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <MicroEdgeBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <MicroEdgeTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </MicroEdgeTypography>
              <MicroEdgeBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </MicroEdgeBox>
            </MicroEdgeBox>
          </Grid>
        </Grid>
      </MicroEdgeBox>
    </Card>
  );
}

export default PaymentMethod;
