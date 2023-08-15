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
import TableCell from "@mui/material/TableCell";

// MicroEdge Suite components
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeBox from "components/MicroEdgeBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <MicroEdgeBox display="flex" alignItems="center" width="max-content">
          <MicroEdgeBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <MicroEdgeBox display="flex" flexDirection="column" ml={3}>
            <MicroEdgeTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </MicroEdgeTypography>
            <MicroEdgeTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {content}
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <MicroEdgeBox display="flex" flexDirection="column">
          <MicroEdgeTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </MicroEdgeTypography>
          <MicroEdgeTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {content}
          </MicroEdgeTypography>
        </MicroEdgeBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
