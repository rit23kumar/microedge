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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function Invoice({ date, id, price, noGutter }) {
  return (
    <MicroEdgeBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <MicroEdgeBox lineHeight={1.125}>
        <MicroEdgeTypography display="block" variant="button" fontWeight="medium">
          {date}
        </MicroEdgeTypography>
        <MicroEdgeTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox display="flex" alignItems="center">
        <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
          {price}
        </MicroEdgeTypography>
        <MicroEdgeBox
          display="flex"
          alignItems="center"
          lineHeight={1}
          ml={3}
          sx={{ cursor: "pointer" }}
        >
          <Icon fontSize="small">picture_as_pdf</Icon>
          <MicroEdgeTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </MicroEdgeTypography>
        </MicroEdgeBox>
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
