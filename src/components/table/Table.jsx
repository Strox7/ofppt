import { Avatar } from "@mui/material";
import "./tabele.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BadgeAvatars from "../header/BadgeAvatars";
import CircularProgress from "@mui/joy/CircularProgress";
import { Typography } from "@mui/joy";
function Tables() {
  const listes = [
    {
      img: <BadgeAvatars />,
      id: "2004090100228",
      fullname: "Bouhanout Mostafa",
      dateOfBirth: "01/09/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004090300254",
      fullname: "Afarid Badr Eddine",
      dateOfBirth: "03/09/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005030200113",
      fullname: "Ahnid Said",
      dateOfBirth: "02/03/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2003020800095",
      fullname: "Aouyna Yassine",
      dateOfBirth: "08/02/2003",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006012500107",
      fullname: "Atrassi Mohamed",
      dateOfBirth: "25/01/2006",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005072800191",
      fullname: "Azanzoune Aicha",
      dateOfBirth: "28/07/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005092300198",
      fullname: "Baba Ali abdelmoughit",
      dateOfBirth: "23/09/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006022300093",
      fullname: "blouz bakr",
      dateOfBirth: "23/02/2006",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004100100204",
      fullname: "boussouf ayoub",
      dateOfBirth: "01/10/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005120400014",
      fullname: "chirah souhail",
      dateOfBirth: "04/12/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2003031500470",
      fullname: "daaji mohamed",
      dateOfBirth: "31/03/2003",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2002051000416",
      fullname: "el ouarraq achraf",
      dateOfBirth: "10/05/2002",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2006020800089",
      fullname: "el marighyghy hiba",
      dateOfBirth: "08/02/2006",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005110900117",
      fullname: "faid rayane",
      dateOfBirth: "09/11/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004111200318",
      fullname: "idbakasse reda",
      dateOfBirth: "12/11/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005050500138",
      fullname: "kahir yassine",
      dateOfBirth: "05/05/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2001082000248",
      fullname: "kitra oumaima",
      dateOfBirth: "20/08/2001",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2001010200673",
      fullname: "laazri youssef",
      dateOfBirth: "01/01/2001",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005030700165",
      fullname: "maniyani marouane",
      dateOfBirth: "07/03/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005072800190",
      fullname: "nait hamza",
      dateOfBirth: "28/07/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004060700137",
      fullname: "rahali othmane",
      dateOfBirth: "07/06/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005112100158",
      fullname: "tali soukaina",
      dateOfBirth: "21/11/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2005012500359",
      fullname: "waaziz ilyass",
      dateOfBirth: "25/01/2005",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
    {
      img: <Avatar />,
      id: "2004080700114",
      fullname: "zaime yassine",
      dateOfBirth: "07/08/2004",
      performance: (
        <CircularProgress determinate value={70}>
          <Typography sx={{ color: "white", fontSize: "10px" }}>70%</Typography>
        </CircularProgress>
      ),
    },
  ];

  return (
    <TableContainer
      component={Paper}
      className="table"
      sx={{
        height: "300px !important",
        backgroundColor: "#1c283b",
        // borderRadius: "20px",
        boxShadow: "none",
      }}
    >
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead
          sx={{
            position: "sticky",
            top: "-2px",
            backgroundColor: "#1c283b",
            zIndex: "5",
          }}
        >
          <TableRow>
            <TableCell
              sx={{ color: "white !important", border: "none" }}
              className="tablecell"
            >
              Full Name
            </TableCell>

            <TableCell
              sx={{ color: "white !important", border: "none" }}
              className="tablecell"
            >
              Student ID
            </TableCell>
            <TableCell
              sx={{ color: "white !important", border: "none" }}
              className="tablecell"
            >
              Date of Birth
            </TableCell>
            <TableCell
              sx={{ color: "white !important", border: "none" }}
              className="tablecell"
            >
              Performance
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listes.map((list) => (
            <TableRow key={list.id} sx={{ border: 0 }}>
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "white !important", border: "none" }}
                className="tablecell"
              >
                <div className="cellWrapper">
                  {list.img}
                  {list.fullname}
                </div>
              </TableCell>

              <TableCell
                sx={{ color: "white !important", border: "none" }}
                className="tablecell"
              >
                {list.id}
              </TableCell>
              <TableCell
                sx={{ color: "white !important", border: "none" }}
                className="tablecell"
              >
                {list.dateOfBirth}
              </TableCell>
              <TableCell
                sx={{ color: "white !important", border: "none" }}
                className="tablecell"
              >
                {/* <div className="holde">
                  <span className="span2">
                    <span className="span1">{list.performance}</span>
                  </span>
                </div> */}
                {list.performance}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tables;
