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

// MicroEdge Suite base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// MicroEdge Suite helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import boxShadow from "assets/theme-dark/functions/boxShadow";

const { dark, white } = colors;
const { borderWidth, borderColor } = borders;

const stepIcon = {
  styleOverrides: {
    root: {
      background: white.main,
      fill: white.main,
      stroke: white.main,
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      border: `${borderWidth[2]} solid ${borderColor}`,
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
      },

      "&.Mui-completed": {
        background: dark.main,
        fill: dark.main,
        stroke: dark.main,
        borderColor: dark.main,
        boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
      },
    },
  },
};

export default stepIcon;
