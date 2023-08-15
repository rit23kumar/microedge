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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeInput from "components/MicroEdgeInput";
import MicroEdgeButton from "components/MicroEdgeButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/microedge-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <MicroEdgeBox component="form" role="form">
        <MicroEdgeBox mb={2}>
          <MicroEdgeInput type="email" placeholder="Email" size="large" />
        </MicroEdgeBox>
        <MicroEdgeBox mb={2}>
          <MicroEdgeInput type="password" placeholder="Password" size="large" />
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MicroEdgeTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox mt={4} mb={1}>
          <MicroEdgeButton color="info" size="large" fullWidth>
            Sign In
          </MicroEdgeButton>
        </MicroEdgeBox>
        <MicroEdgeBox mt={3} textAlign="center">
          <MicroEdgeTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <MicroEdgeTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </MicroEdgeTypography>
          </MicroEdgeTypography>
        </MicroEdgeBox>
      </MicroEdgeBox>
    </IllustrationLayout>
  );
}

export default Illustration;
