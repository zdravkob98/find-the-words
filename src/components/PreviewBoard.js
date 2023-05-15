import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

const PreviewBoard = ({ tableData }) => {
  return (
    <Grid container justifyContent="center" marginTop={10}>
      <TableContainer
        component={Paper}
        sx={
          tableData[0].length === 2
            ? {
                width: "200px",
              }
            : tableData[0].length === 3
            ? {
                width: "300px",
              }
            : tableData[0].length === 4
            ? {
                width: "400px",
              }
            : tableData[0].length === 5
            ? {
                width: "500px",
              }
            : tableData[0].length === 6
            ? {
                width: "600px",
              }
            : tableData[0].length === 7
            ? {
                width: "700px",
              }
            : tableData[0].length === 8
            ? {
                width: "800px",
              }
            : tableData[0].length === 9
            ? {
                width: "900px",
              }
            : {
                width: "1000px",
              }
        }
      >
        <Table sx={{ border: "1px solid black" }}>
          <TableBody>
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    sx={{
                      border: "1px solid black",
                      textAlign: "center",
                      fontSize: "200%",
                    }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PreviewBoard;
