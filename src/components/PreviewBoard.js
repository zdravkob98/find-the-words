import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { getTableWidth } from "../utils/tableWidth";

const PreviewBoard = ({ tableData }) => {
  return (
    <Grid container justifyContent="center" marginTop={10}>
      <TableContainer
        component={Paper}
        sx={{
          width: getTableWidth(tableData),
        }}
      >
        <Table className="table">
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
