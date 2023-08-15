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

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { PolarArea } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// PolarChart configurations
import configs from "examples/Charts/PolarChart/configs";

function PolarChart({ title, description, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderChart = (
    <MicroEdgeBox p={2}>
      {title || description ? (
        <MicroEdgeBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <MicroEdgeBox mb={1}>
              <MicroEdgeTypography variant="h6">{title}</MicroEdgeTypography>
            </MicroEdgeBox>
          )}
          <MicroEdgeBox mb={2}>
            <MicroEdgeTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </MicroEdgeTypography>
          </MicroEdgeBox>
        </MicroEdgeBox>
      ) : null}
      {useMemo(
        () => (
          <MicroEdgeBox p={4}>
            <PolarArea data={data} options={options} />
          </MicroEdgeBox>
        ),
        [chart]
      )}
    </MicroEdgeBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PolarChart;
