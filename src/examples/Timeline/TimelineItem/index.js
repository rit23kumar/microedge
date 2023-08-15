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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeBadge from "components/MicroEdgeBadge";

// Timeline context
import { useTimeline } from "examples/Timeline/context";

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from "examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <MicroEdgeBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <MicroEdgeBadge color={color} size="xs" badgeContent={badge} container />
            </MicroEdgeBox>
          );
        })
      : null;

  return (
    <MicroEdgeBox position="relative" sx={(theme) => timelineItem(theme, { lastItem })}>
      <MicroEdgeBox
        bgColor={isDark ? "dark" : "white"}
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
      </MicroEdgeBox>
      <MicroEdgeBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <MicroEdgeTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </MicroEdgeTypography>
        <MicroEdgeBox mt={0.5}>
          <MicroEdgeTypography
            variant="caption"
            fontWeight="medium"
            color={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox mt={2} mb={1.5}>
          {description ? (
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              {description}
            </MicroEdgeTypography>
          ) : null}
        </MicroEdgeBox>
        {badges.length > 0 ? (
          <MicroEdgeBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </MicroEdgeBox>
        ) : null}
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
