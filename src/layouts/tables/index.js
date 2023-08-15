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
import Card from "@mui/material/Card";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// MicroEdge Suite examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MicroEdgeBox py={3}>
        <MicroEdgeBox mb={3}>
          <Card>
            <MicroEdgeBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <MicroEdgeTypography variant="h6">Authors table</MicroEdgeTypography>
            </MicroEdgeBox>
            <MicroEdgeBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </MicroEdgeBox>
          </Card>
        </MicroEdgeBox>
        <Card>
          <MicroEdgeBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <MicroEdgeTypography variant="h6">Projects table</MicroEdgeTypography>
          </MicroEdgeBox>
          <MicroEdgeBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </MicroEdgeBox>
        </Card>
      </MicroEdgeBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
