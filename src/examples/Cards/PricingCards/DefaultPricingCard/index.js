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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeButton from "components/MicroEdgeButton";

function DefaultPricingCard({ title, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <MicroEdgeBox key={label} display="flex" alignItems="center" p={1}>
      <MicroEdgeBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <MicroEdgeTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeTypography variant="body2" color="text">
        {label}
      </MicroEdgeTypography>
    </MicroEdgeBox>
  ));

  return (
    <Card>
      <MicroEdgeBox pt={3} pb={2} px={2} textAlign="center">
        <MicroEdgeTypography variant="body2" color="dark" textTransform="uppercase" fontWeight="medium">
          {title}
        </MicroEdgeTypography>
        <MicroEdgeBox my={1}>
          <MicroEdgeTypography variant="h1">
            <MicroEdgeTypography display="inline" component="small" variant="h2">
              {price.currency}
            </MicroEdgeTypography>
            {price.value}
          </MicroEdgeTypography>
        </MicroEdgeBox>
      </MicroEdgeBox>
      <MicroEdgeBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <MicroEdgeBox mt={3}>
            <MicroEdgeButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MicroEdgeButton>
          </MicroEdgeBox>
        ) : (
          <MicroEdgeBox mt={3}>
            <MicroEdgeButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MicroEdgeButton>
          </MicroEdgeBox>
        )}
      </MicroEdgeBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default DefaultPricingCard;
