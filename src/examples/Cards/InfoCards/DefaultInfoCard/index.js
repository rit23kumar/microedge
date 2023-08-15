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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card>
      <MicroEdgeBox p={2} mx={3} display="flex" justifyContent="center">
        <MicroEdgeBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </MicroEdgeBox>
      </MicroEdgeBox>
      <MicroEdgeBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <MicroEdgeTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MicroEdgeTypography>
        {description && (
          <MicroEdgeTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </MicroEdgeTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <MicroEdgeTypography variant="h5" fontWeight="medium">
            {value}
          </MicroEdgeTypography>
        )}
      </MicroEdgeBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DefaultInfoCard;
