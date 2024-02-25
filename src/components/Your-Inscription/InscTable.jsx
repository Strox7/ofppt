import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function createData(
  school,
  firstChoice,
  SecondChoice,
  thirdChoice,
  level,
  statut
) {
  return { school, firstChoice, SecondChoice, thirdChoice, level, statut };
}

const rows = [
  createData(
    "INSTITUT DE TECHNOLOGIE APPLIQUEE",
    "Developemont Digital",
    "Infrastructure Digital",
    "Developemont Digital",

    "Specialized technician",

    "Admis"
  ),
  createData(
    "INSTITUT DE TECHNOLOGIE APPLIQUEE",
    "Developemont Digital",
    "Infrastructure Digital",
    "Developemont Digital",

    "Specialized technician",

    "Admis"
  ),
  //   createData("3", 262, 16.0, 24, 6.0),
  //   createData("4", 305, 3.7, 67, 4.3),
];

export default function TableColumnPinning() {
  const Navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", marginTop: "80px" }}>
      {/* <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
        ← Scroll direction →
      </Typography> */}
      <Sheet
        variant="outlined"
        sx={{
          "--TableCell-height": "40px",
          // the number is the amount of the header rows.
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          "--Table-firstColumnWidth": "80px",
          "--Table-lastColumnWidth": "144px",
          // background needs to have transparency to show the scrolling shadows
          "--TableRow-stripeBackground": "rgba(0 0 0 / 0.04)",
          "--TableRow-hoverBackground": "rgba(0 0 0 / 0.08)",
          backgroundColor: "transparent",
          overflow: "auto",
          border: "none",
          borderRadius: "10px",
          //   background: (theme) =>
          //     `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
          //     linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
          //     radial-gradient(
          //       farthest-side at 0 50%,
          //       rgba(0, 0, 0, 0.12),
          //       rgba(0, 0, 0, 0)
          //     ),
          //     radial-gradient(
          //         farthest-side at 100% 50%,
          //         rgba(0, 0, 0, 0.12),
          //         rgba(0, 0, 0, 0)
          //       )
          //       0 100%`,
          //   backgroundSize:
          //     "40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))",
          //   backgroundRepeat: "no-repeat",
          //   backgroundAttachment: "local, local, scroll, scroll",
          //   backgroundPosition:
          //     "var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)",
          //   backgroundColor: "#1c283b",
          //   color: "white !important",
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            color: "white !important",
            "& tr > *:first-child": {
              //   position: "sticky",
              //   left: 0,
              boxShadow: "1px 0 var(--TableCell-borderColor)",

              color: "white",
              backgroundColor: "#0f1928",
            },
            "& tr > *:last-child": {
              position: "sticky",
              right: 0,
              bgcolor: "#0f1928",
              color: "white",
            },
            "& tr:nth-of-type(odd)": {
              color: "white !important",
            },
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: 100,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                School
              </th>
              <th
                style={{
                  width: 150,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                First Choice
              </th>
              <th
                style={{
                  width: 150,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                Second Choice
              </th>
              <th
                style={{
                  width: 150,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                Third Choice
              </th>
              <th
                style={{
                  width: 90,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                Statut
              </th>
              <th
                style={{
                  width: 90,
                  color: "#878787",
                  backgroundColor: "#0f1928",
                }}
              >
                Level
              </th>

              <th
                aria-label="last"
                style={{
                  width: 55,
                  backgroundColor: "#0f1928",
                }}
              />
            </tr>
          </thead>
          <tbody
            style={{
              color: "white !important",
              fontSize: "11px",
              textTransform: "uppercase",
            }}
          >
            {rows.map((row) => (
              <tr key={row.school}>
                <td>{row.school}</td>

                <td>{row.firstChoice}</td>
                <td>{row.SecondChoice}</td>
                <td>{row.thirdChoice}</td>
                <td>{row.statut}</td>

                <td>{row.level}</td>

                <td>
                  <Box sx={{ display: "flex", gap: 1, paddingLeft: "10px" }}>
                    <Button
                      onClick={() => Navigate("/Your-inscription/details")}
                      size="sm"
                      variant="plain"
                      color="neutral"
                      sx={{
                        padding: "0 ",
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <CloudUploadIcon
                        sx={{ color: "white", fontSize: "20px" }}
                      />
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: "transparent",
                        padding: "0 ",
                        "&:hover": {
                          backgroundColor: "transparent !important",
                        },
                      }}
                      size="sm"
                    >
                      <DeleteIcon
                        sx={{
                          color: "#e93535",
                          fontSize: "20px",
                        }}
                      />
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
}
