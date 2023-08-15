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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MicroEdgeInput
import MicroEdgeInputRoot from "components/MicroEdgeInput/MicroEdgeInputRoot";

// MicroEdge Suite context
import { useMicroEdgeController } from "context";

const MicroEdgeInput = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
  const [controller] = useMicroEdgeController();
  const { darkMode } = controller;

  return (
    <MicroEdgeInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
  );
});

// Setting default values for the props of MicroEdgeInput
MicroEdgeInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MicroEdgeInput
MicroEdgeInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MicroEdgeInput;
