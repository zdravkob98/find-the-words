import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Grid,
  Button,
  TableCell,
  TextField,
  TableRow,
} from "@mui/material";
import { alphabetArray } from "../components/AlphabetArray";
import "../App.css";
import { getTableWidth } from "../utils/tableWidth";

const EmptyBoard = ({
  tableData,
  rows,
  columns,
  tableDataChange,
  previewTable,
}) => {
  const handleCellChange = (e, rowIndex, columnIndex) => {
    if (alphabetArray.includes(e.target.value)) {
      const updatedTableData = [...tableData];
      updatedTableData[rowIndex][columnIndex] = e.target.value.toUpperCase();
      tableDataChange(updatedTableData);
    }
  };

  const checkObject = (object) => {
    for (let i = 0; i < object.length; i++) {
      const innerArray = object[i];

      for (let j = 0; j < innerArray.length; j++) {
        const element = innerArray[j];

        // Perform your check on each element
        if (element === "") {
          return false; // Found an empty element, return false
        }
      }
    }

    return true; // All elements pass the check, return true
  };

  const generatePreviewTable = (data) => {
    previewTable(true);
  };

  const generateTable = (rows, columns) => {
    const tableRows = [];
    const cellSize = 50;

    for (let i = 0; i < rows; i++) {
      const cells = [];

      for (let j = 0; j < columns; j++) {
        const cellId = `cell-${i}-${j}`;

        cells.push(
          <TableCell
            key={j}
            sx={{
              border: "1px solid black",
              width: `${cellSize}px`,
              height: `${cellSize}px`,
            }}
          >
            <TextField
              className="textfield-hover"
              label="Letter"
              id={cellId}
              onChange={(e) => handleCellChange(e, i, j)}
              inputProps={{ min: 1, maxLength: 1, autoComplete: "off" }}
              size="small" // Set the size to 'small' for a compact appearance
            />
          </TableCell>
        );
      }

      tableRows.push(<TableRow key={i}>{cells}</TableRow>);
    }

    return tableRows;
  };

  return (
    <>
      <Grid container marginTop={10} justifyContent="center">
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <h2>2. Please fill the board.</h2>
          <h4>Please use only the Bulgarian alphabet.</h4>
        </Grid>
        <TableContainer
          component={Paper}
          sx={{
            width: getTableWidth(tableData),
          }}
        >
          <Table className="table">
            <TableBody>{generateTable(rows, columns)}</TableBody>
          </Table>
        </TableContainer>
        <Grid item container xs={12} justifyContent="center" marginTop={5}>
          <Button
            className="orange-button"
            disabled={!checkObject(tableData)}
            type="submit"
            variant="contained"
            onClick={() => generatePreviewTable(tableData)}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EmptyBoard;
