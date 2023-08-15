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

// MicroEdge Suite base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { white } = colors;
const { cardBoxShadow } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: cardBoxShadow,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
