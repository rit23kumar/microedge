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

function CategoriesList({ title, categories }) {
  const renderItems = categories.map(({ color, icon, name, description, route }, key) => (
    <MicroEdgeBox
      key={name}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={categories.length - 1 === key ? 0 : 1}
    >
      <MicroEdgeBox display="flex" alignItems="center">
        <MicroEdgeBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={color}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          variant="gradient"
        >
          <Icon
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {icon}
          </Icon>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" flexDirection="column">
          <MicroEdgeTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </MicroEdgeTypography>
          <MicroEdgeTypography variant="caption" color="text">
            {description}
          </MicroEdgeTypography>
        </MicroEdgeBox>
      </MicroEdgeBox>
      <MicroEdgeBox display="flex">
        <MicroEdgeTypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </MicroEdgeTypography>
      </MicroEdgeBox>
    </MicroEdgeBox>
  ));

  return (
    <Card>
      <MicroEdgeBox pt={2} px={2}>
        <MicroEdgeTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox p={2}>
        <MicroEdgeBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </MicroEdgeBox>
      </MicroEdgeBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
