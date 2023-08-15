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

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeInput from "components/MicroEdgeInput";
import MicroEdgeButton from "components/MicroEdgeButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";

function Cover() {
  return (
    <CoverLayout
      title="Welcome!"
      description="Use these awesome forms to login or create new account in your project for free."
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        <MicroEdgeBox p={3} mb={1} textAlign="center">
          <MicroEdgeTypography variant="h5" fontWeight="medium">
            Register with
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox mb={2}>
          <Socials />
        </MicroEdgeBox>
        <MicroEdgeBox px={12}>
          <Separator />
        </MicroEdgeBox>
        <MicroEdgeBox pt={2} pb={3} px={3}>
          <MicroEdgeBox component="form" role="form">
            <MicroEdgeBox mb={2}>
              <MicroEdgeInput placeholder="Name" />
            </MicroEdgeBox>
            <MicroEdgeBox mb={2}>
              <MicroEdgeInput type="email" placeholder="Email" />
            </MicroEdgeBox>
            <MicroEdgeBox mb={2}>
              <MicroEdgeInput type="password" placeholder="Password" />
            </MicroEdgeBox>
            <MicroEdgeBox display="flex" alignItems="center">
              <Checkbox defaultChecked />
              <MicroEdgeTypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MicroEdgeTypography>
              <MicroEdgeTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox mt={4} mb={1}>
              <MicroEdgeButton variant="gradient" color="dark" fullWidth>
                sign up
              </MicroEdgeButton>
            </MicroEdgeBox>
            <MicroEdgeBox mt={2}>
              <MicroEdgeTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <MicroEdgeTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </MicroEdgeTypography>
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        </MicroEdgeBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
