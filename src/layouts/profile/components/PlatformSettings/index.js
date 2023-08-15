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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <MicroEdgeBox pt={2} px={2}>
        <MicroEdgeTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </MicroEdgeTypography>
      </MicroEdgeBox>
      <MicroEdgeBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <MicroEdgeTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </MicroEdgeTypography>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox mt={3}>
          <MicroEdgeTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            application
          </MicroEdgeTypography>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" py={1} mb={0.25}>
          <MicroEdgeBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </MicroEdgeBox>
          <MicroEdgeBox width="80%" ml={2}>
            <MicroEdgeTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
      </MicroEdgeBox>
    </Card>
  );
}

export default PlatformSettings;
