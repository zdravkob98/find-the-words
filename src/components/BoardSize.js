import { Grid, TextField, Button } from "@mui/material";
import initializeTableData from "../App";

const Board = ({
  rows,
  columns,
  selectedRows,
  selectedColumns,
  submitted,
  tableFormat,
}) => {
  const initializeTableData = () => {
    const data = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => "")
    );
    tableFormat(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitted(true);
    initializeTableData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        marginTop={10}
      >
        <Grid item container xs={12} justifyContent="center">
          <h2>1. Please choose the board size.</h2>
        </Grid>
        <Grid item>
          <TextField
            label="Rows"
            variant="outlined"
            value={rows}
            type="number"
            required
            onChange={(e) => selectedRows(e.target.value)}
            inputProps={{ min: 2, max: 10 }}
            sx={{ width: "100px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Columns"
            variant="outlined"
            value={columns}
            type="number"
            required
            onChange={(e) => selectedColumns(e.target.value)}
            inputProps={{ min: 2, max: 10 }}
            sx={{ width: "100px" }}
          />
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Button
            disabled={rows === 0 || columns === 0}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Board;
