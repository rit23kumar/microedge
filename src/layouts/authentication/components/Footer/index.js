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

// @mui material components
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

function Footer() {
  return (
    <MicroEdgeBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <MicroEdgeBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <MicroEdgeBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                Company
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                Team
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                Product
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox>
              <MicroEdgeTypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <MicroEdgeBox display="flex" justifyContent="center" mt={1} mb={3}>
            <MicroEdgeBox mr={3} color="secondary">
              <FacebookIcon fontSize="small" />
            </MicroEdgeBox>
            <MicroEdgeBox mr={3} color="secondary">
              <TwitterIcon fontSize="small" />
            </MicroEdgeBox>
            <MicroEdgeBox mr={3} color="secondary">
              <InstagramIcon fontSize="small" />
            </MicroEdgeBox>
            <MicroEdgeBox mr={3} color="secondary">
              <PinterestIcon fontSize="small" />
            </MicroEdgeBox>
            <MicroEdgeBox color="secondary">
              <LinkedInIcon fontSize="small" />
            </MicroEdgeBox>
          </MicroEdgeBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MicroEdgeTypography variant="body2" color="secondary">
            Copyright &copy; 2022 MicroEdge by MicroEdge.
          </MicroEdgeTypography>
        </Grid>
      </Grid>
    </MicroEdgeBox>
  );
}

export default Footer;
