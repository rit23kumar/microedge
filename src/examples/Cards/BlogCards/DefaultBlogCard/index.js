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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeAvatar from "components/MicroEdgeAvatar";

function DefaultBlogCard({ image, category, title, description, author, action }) {
  return (
    <Card>
      <MicroEdgeBox mt={2} mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <MicroEdgeBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MicroEdgeBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MuiLink>
        )}
      </MicroEdgeBox>
      <MicroEdgeBox pb={3} px={3}>
        {category && (
          <MicroEdgeTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
          >
            {category.label}
          </MicroEdgeTypography>
        )}
        <MicroEdgeBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <MicroEdgeTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </MicroEdgeTypography>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <MicroEdgeTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </MicroEdgeTypography>
            </MuiLink>
          )}
        </MicroEdgeBox>
        <MicroEdgeTypography variant="body2" component="p" color="text">
          {description}
        </MicroEdgeTypography>
        {author && (
          <MicroEdgeBox display="flex" alignItems="center" mt={3}>
            <MicroEdgeAvatar variant="rounded" src={author.image} alt={author.name} shadow="md" />
            <MicroEdgeBox pl={2} lineHeight={0}>
              <MicroEdgeTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </MicroEdgeTypography>
              <MicroEdgeTypography variant="caption" color="text">
                {author.date}
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        )}
      </MicroEdgeBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
