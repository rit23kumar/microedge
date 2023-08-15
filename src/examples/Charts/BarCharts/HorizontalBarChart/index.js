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
import { Bar } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// HorizontalBarChart configurations
import configs from "examples/Charts/BarCharts/HorizontalBarChart/configs";

// MicroEdge Suite base styles
import colors from "assets/theme/base/colors";

function HorizontalBarChart({ title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: false,
        maxBarThickness: 35,
      }))
    : [];

  const { data, options } = configs(chart.labels || [], chartDatasets);

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
          <MicroEdgeBox height={height}>
            <Bar data={data} options={options} />
          </MicroEdgeBox>
        ),
        [chart, height]
      )}
    </MicroEdgeBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of HorizontalBarChart
HorizontalBarChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the HorizontalBarChart
HorizontalBarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default HorizontalBarChart;
