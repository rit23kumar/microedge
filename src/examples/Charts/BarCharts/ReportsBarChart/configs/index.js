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

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "#fff",
          data: datasets.data,
          maxBarThickness: 6,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 15,
            font: {
              size: 14,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };
}

export default configs;
