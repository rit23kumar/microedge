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

// MicroEdge Suite Base Styles
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// MicroEdge Suite Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.sm,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.md,
  padding: `${pxToRem(10)} ${pxToRem(20)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "none",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: `all 150ms ease-in`,

  "&:hover": {
    transform: "translateY(-1px)",
  },

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;
