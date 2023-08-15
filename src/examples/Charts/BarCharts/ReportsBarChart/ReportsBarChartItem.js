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

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// MicroEdge Suite base styles
import typography from "assets/theme/base/typography";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeProgress from "components/MicroEdgeProgress";

function ReportsBarChartItem({ color, icon, label, progress }) {
  const { size } = typography;

  return (
    <MicroEdgeBox width="100%">
      <MicroEdgeBox display="flex" alignItems="center" mb={2}>
        <MicroEdgeBox
          bgColor={icon.color}
          width="1.25rem"
          height="1.25rem"
          borderRadius="sm"
          color="white"
          fontSize={size.xs}
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="md"
          mr={1}
          variant="gradient"
        >
          <Icon>{icon.component}</Icon>
        </MicroEdgeBox>
        <MicroEdgeTypography
          variant="caption"
          textTransform="capitalize"
          fontWeight="medium"
          color="text"
        >
          {label}
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox mt={1}>
        <MicroEdgeTypography variant="h4" fontWeight="bold" color={color}>
          {progress.content}
        </MicroEdgeTypography>
        <MicroEdgeBox width="75%" mt={0.5}>
          <MicroEdgeProgress value={progress.percentage} color={color} />
        </MicroEdgeBox>
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Setting default values for the props of ReportsBarChartItem
ReportsBarChartItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ReportsBarChartItem
ReportsBarChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  progress: PropTypes.shape({
    content: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportsBarChartItem;
