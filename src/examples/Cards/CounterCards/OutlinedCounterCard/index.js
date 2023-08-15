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

// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// MicroEdge Suite base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function OutlinedCounterCard({ color, count, title, prefix, suffix }) {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <MicroEdgeBox
      borderRadius="md"
      border={`${borderWidth[1]} dashed ${secondary.main}`}
      textAlign="center"
      py={2}
    >
      <MicroEdgeTypography variant="h6" color={color} fontWeight="medium" textTransform="capitalize">
        {title}
      </MicroEdgeTypography>
      <MicroEdgeTypography variant="h4" fontWeight="bold">
        {prefix && (
          <MicroEdgeTypography component="span" variant="h5" fontWeight="bold">
            {prefix}
          </MicroEdgeTypography>
        )}
        <MicroEdgeBox display="inline-block" color="inherit" mx={0.5}>
          <CountUp end={count} duration={1} separator="," />
        </MicroEdgeBox>
        {suffix && (
          <MicroEdgeTypography component="span" variant="h5" fontWeight="bold">
            {suffix}
          </MicroEdgeTypography>
        )}
      </MicroEdgeTypography>
    </MicroEdgeBox>
  );
}

// Setting default values for the props of OutlinedCounterCard
OutlinedCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
};

// Typechecking props for the BlogCard
OutlinedCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OutlinedCounterCard;
