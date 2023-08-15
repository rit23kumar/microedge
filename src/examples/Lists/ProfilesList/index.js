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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeAvatar from "components/MicroEdgeAvatar";
import MicroEdgeButton from "components/MicroEdgeButton";

function ProfilesList({ title, profiles }) {
  const renderProfiles = profiles.map(({ image, name, description, action }) => (
    <MicroEdgeBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MicroEdgeBox mr={2}>
        <MicroEdgeAvatar src={image} alt="something here" variant="rounded" shadow="md" />
      </MicroEdgeBox>
      <MicroEdgeBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <MicroEdgeTypography variant="button" fontWeight="medium">
          {name}
        </MicroEdgeTypography>
        <MicroEdgeTypography variant="caption" color="text">
          {description}
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox ml="auto">
        {action.type === "internal" ? (
          <MicroEdgeButton component={Link} to={action.route} variant="text" color="info">
            {action.label}
          </MicroEdgeButton>
        ) : (
          <MicroEdgeButton
            component="a"
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="text"
            color={action.color}
          >
            {action.label}
          </MicroEdgeButton>
        )}
      </MicroEdgeBox>
    </MicroEdgeBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <MicroEdgeBox pt={2} px={2}>
        <MicroEdgeTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox p={2}>
        <MicroEdgeBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MicroEdgeBox>
      </MicroEdgeBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
