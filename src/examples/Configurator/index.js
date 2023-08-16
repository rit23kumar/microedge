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

// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeButton from "components/MicroEdgeButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// MicroEdge Suite context
import {
  useMicroEdgeController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {
  const [controller, dispatch] = useMicroEdgeController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MicroEdgeBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <MicroEdgeBox>
          <MicroEdgeTypography variant="h5">MicroEdge Configurator</MicroEdgeTypography>
          <MicroEdgeTypography variant="body2" color="text">
            See our dashboard options.
          </MicroEdgeTypography>
        </MicroEdgeBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MicroEdgeBox>

      <Divider />

      <MicroEdgeBox pt={1.25} pb={3} px={3}>
        <MicroEdgeBox>
          <MicroEdgeTypography variant="h6">Sidenav Colors</MicroEdgeTypography>

          <MicroEdgeBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColor === color && dark.main,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </MicroEdgeBox>
        </MicroEdgeBox>

        <MicroEdgeBox mt={3} lineHeight={1}>
          <MicroEdgeTypography variant="h6">Sidenav Type</MicroEdgeTypography>
          <MicroEdgeTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </MicroEdgeTypography>

          <MicroEdgeBox
            sx={{
              display: "flex",
              mt: 2,
            }}
          >
            <MicroEdgeButton
              color="info"
              variant={darkSidenav ? "outlined" : "gradient"}
              onClick={handleWhiteSidenav}
              fullWidth
            >
              White
            </MicroEdgeButton>
            <MicroEdgeButton
              color="info"
              variant={darkSidenav ? "gradient" : "outlined"}
              onClick={handledarkSidenav}
              fullWidth
              sx={{
                ml: 1,
              }}
            >
              Dark
            </MicroEdgeButton>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <MicroEdgeBox display="flex" justifyContent="space-between" mt={3} lineHeight={1}>
          <MicroEdgeTypography variant="h6">Navbar Fixed</MicroEdgeTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </MicroEdgeBox>

        <Divider />

        <MicroEdgeBox display="flex" justifyContent="space-between" lineHeight={1}>
          <MicroEdgeTypography variant="h6">Sidenav Mini</MicroEdgeTypography>

          <Switch checked={miniSidenav} onChange={handleMiniSidenav} />
        </MicroEdgeBox>

        <Divider />

        <MicroEdgeBox display="flex" justifyContent="space-between" lineHeight={1}>
          <MicroEdgeTypography variant="h6">Light / Dark</MicroEdgeTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </MicroEdgeBox>
        
      </MicroEdgeBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
