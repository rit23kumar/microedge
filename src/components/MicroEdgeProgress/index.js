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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// MicroEdge Suite components
import MicroEdgeTypography from "components/MicroEdgeTypography";

// Custom styles for MicroEdgeProgress
import MicroEdgeProgressRoot from "components/MicroEdgeProgress/MicroEdgeProgressRoot";

const MicroEdgeProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <MicroEdgeTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </MicroEdgeTypography>
    )}
    <MicroEdgeProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of MicroEdgeProgress
MicroEdgeProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MicroEdgeProgress
MicroEdgeProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MicroEdgeProgress;
