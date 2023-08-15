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
import Grid from "@mui/material/Grid";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// MicroEdge Suite example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

function IllustrationLayout({ color, header, title, description, button, illustration, children }) {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        action={{
          type: "external",
          route: "https://rishu.fun/product/microedge-dashboard-material-ui",
          label: "Free Download",
          ...button,
        }}
      />
      <Grid container>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <MicroEdgeBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <MicroEdgeBox pt={3} px={3}>
              {!header ? (
                <>
                  <MicroEdgeBox mb={1}>
                    <MicroEdgeTypography variant="h4" fontWeight="bold">
                      {title}
                    </MicroEdgeTypography>
                  </MicroEdgeBox>
                  <MicroEdgeTypography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </MicroEdgeTypography>
                </>
              ) : (
                header
              )}
            </MicroEdgeBox>
            <MicroEdgeBox p={3}>{children}</MicroEdgeBox>
          </MicroEdgeBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MicroEdgeBox
            display={{ xs: "none", lg: "flex" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            position="relative"
            borderRadius="lg"
            textAlign="center"
            m={2}
            px={13}
            sx={{ overflow: "hidden" }}
          >
            <MicroEdgeBox
              component="img"
              src={illustration.image}
              alt="background"
              width="100%"
              position="absolute"
              top={0}
              left={0}
            />
            <MicroEdgeBox
              bgColor={color}
              variant="gradient"
              width="100%"
              height="100%"
              position="absolute"
              topl={0}
              left={0}
              opacity={0.7}
            />
            <MicroEdgeBox position="relative">
              {illustration.title && (
                <MicroEdgeBox mt={6} mb={1}>
                  <MicroEdgeTypography variant="h4" color="white" fontWeight="bold">
                    {illustration.title}
                  </MicroEdgeTypography>
                </MicroEdgeBox>
              )}
              {illustration.description && (
                <MicroEdgeBox mb={1}>
                  <MicroEdgeTypography variant="body2" color="white">
                    {illustration.description}
                  </MicroEdgeTypography>
                </MicroEdgeBox>
              )}
            </MicroEdgeBox>
          </MicroEdgeBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  button: { color: "info" },
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;
