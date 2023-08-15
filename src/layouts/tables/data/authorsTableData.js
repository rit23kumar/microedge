/* eslint-disable react/prop-types */
// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";
import MicroEdgeAvatar from "components/MicroEdgeAvatar";
import MicroEdgeBadge from "components/MicroEdgeBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <MicroEdgeBox display="flex" alignItems="center" px={1} py={0.5}>
      <MicroEdgeBox mr={2}>
        <MicroEdgeAvatar src={image} alt={name} size="sm" variant="rounded" />
      </MicroEdgeBox>
      <MicroEdgeBox display="flex" flexDirection="column">
        <MicroEdgeTypography variant="button" fontWeight="medium">
          {name}
        </MicroEdgeTypography>
        <MicroEdgeTypography variant="caption" color="secondary">
          {email}
        </MicroEdgeTypography>
      </MicroEdgeBox>
    </MicroEdgeBox>
  );
}

function Function({ job, org }) {
  return (
    <MicroEdgeBox display="flex" flexDirection="column">
      <MicroEdgeTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </MicroEdgeTypography>
      <MicroEdgeTypography variant="caption" color="secondary">
        {org}
      </MicroEdgeTypography>
    </MicroEdgeBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@rishu.fun" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@rishu.fun" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@rishu.fun" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@rishu.fun" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@rishu.fun" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@rishu.fun" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <MicroEdgeBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <MicroEdgeTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </MicroEdgeTypography>
      ),
      action: (
        <MicroEdgeTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </MicroEdgeTypography>
      ),
    },
  ],
};

export default authorsTableData;
