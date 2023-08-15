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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeButton from "components/MicroEdgeButton";

function Transaction({ color, icon, name, description, value }) {
  return (
    <MicroEdgeBox key={name} component="li" py={1} pr={2} mb={1}>
      <MicroEdgeBox display="flex" justifyContent="space-between" alignItems="center">
        <MicroEdgeBox display="flex" alignItems="center">
          <MicroEdgeBox mr={2}>
            <MicroEdgeButton variant="outlined" color={color} size="small" iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </MicroEdgeButton>
          </MicroEdgeBox>
          <MicroEdgeBox display="flex" flexDirection="column">
            <MicroEdgeTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </MicroEdgeTypography>
            <MicroEdgeTypography variant="caption" color="text">
              {description}
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </MicroEdgeTypography>
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
