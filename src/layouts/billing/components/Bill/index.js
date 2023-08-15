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
import MicroEdgeButton from "components/MicroEdgeButton";

// MicroEdge Suite contexts
import { useMicroEdgeController } from "context";

function Bill({ name, company, email, vat, noGutter }) {
  const [controller] = useMicroEdgeController();
  const { darkMode } = controller;

  return (
    <MicroEdgeBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <MicroEdgeBox width="100%" display="flex" flexDirection="column">
        <MicroEdgeBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <MicroEdgeTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </MicroEdgeTypography>

          <MicroEdgeBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <MicroEdgeBox mr={1}>
              <MicroEdgeButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;Delete
              </MicroEdgeButton>
            </MicroEdgeBox>
            <MicroEdgeButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;Edit
            </MicroEdgeButton>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox mb={1} lineHeight={0}>
          <MicroEdgeTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <MicroEdgeTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {company}
            </MicroEdgeTypography>
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox mb={1} lineHeight={0}>
          <MicroEdgeTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <MicroEdgeTypography variant="caption" fontWeight="medium">
              {email}
            </MicroEdgeTypography>
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <MicroEdgeTypography variant="caption" fontWeight="medium">
            {vat}
          </MicroEdgeTypography>
        </MicroEdgeTypography>
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
