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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// MicroEdge Suite base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social, action }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MicroEdgeBox key={label} display="flex" py={1} pr={2}>
      <MicroEdgeTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </MicroEdgeTypography>
      <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MicroEdgeTypography>
    </MicroEdgeBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <MicroEdgeBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </MicroEdgeBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <MicroEdgeBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MicroEdgeTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MicroEdgeTypography>
        <MicroEdgeTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox p={2}>
        <MicroEdgeBox mb={2} lineHeight={1}>
          <MicroEdgeTypography variant="button" color="text" fontWeight="regular">
            {description}
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox opacity={0.3}>
          <Divider />
        </MicroEdgeBox>
        <MicroEdgeBox>
          {renderItems}
          <MicroEdgeBox display="flex" py={1} pr={2}>
            <MicroEdgeTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </MicroEdgeTypography>
            {renderSocial}
          </MicroEdgeBox>
        </MicroEdgeBox>
      </MicroEdgeBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfoCard;
