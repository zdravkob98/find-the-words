import { Grid, Divider, List, ListItem, ListItemText } from "@mui/material";
import { words } from "../components/Words";

const FoundWords = ({ rows, columns, tableData }) => {
  const dfs = (table, visited, row, col, word, currentWord, found) => {
    if (word === "") {
      found.add(currentWord);
      return;
    }

    if (row >= 0 && row < table.length && col >= 0 && col < table[row].length) {
      if (!visited[row][col] && table[row][col] === word[0]) {
        visited[row][col] = true;

        const newWord = currentWord + table[row][col];

        dfs(table, visited, row - 1, col, word.slice(1), newWord, found); // Up
        dfs(table, visited, row + 1, col, word.slice(1), newWord, found); // Down
        dfs(table, visited, row, col - 1, word.slice(1), newWord, found); // Left
        dfs(table, visited, row, col + 1, word.slice(1), newWord, found); // Right

        visited[row][col] = false;
      }
    }
  };

  const iterateTable = (rows, cols, tableData, words) => {
    const foundWords = new Set();
    const startTime = performance.now();

    for (let i = 0; i < words.length; i++) {
      const visited = new Array(rows - 0)
        .fill(false)
        .map(() => new Array(cols).fill(false));
      const word = words[i];

      for (let j = 0; j < rows; j++) {
        for (let k = 0; k < cols; k++) {
          dfs(tableData, visited, j, k, word, "", foundWords);
        }
      }
    }
    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    const foundWordsArray = [...foundWords];
    const words3 = foundWordsArray
      .filter((word) => word.length === 3)
      .join(", ");
    const words4 = foundWordsArray
      .filter((word) => word.length === 4)
      .join(", ");
    const words5 = foundWordsArray
      .filter((word) => word.length === 5)
      .join(", ");
    const words6 = foundWordsArray
      .filter((word) => word.length === 6)
      .join(", ");
    const words7 = foundWordsArray
      .filter((word) => word.length === 7)
      .join(", ");
    const words8 = foundWordsArray
      .filter((word) => word.length === 8)
      .join(", ");
    const words9 = foundWordsArray
      .filter((word) => word.length === 9)
      .join(", ");
    const words10 = foundWordsArray
      .filter((word) => word.length === 10)
      .join(", ");
    const words11 = foundWordsArray
      .filter((word) => word.length === 11)
      .join(", ");
    const words12 = foundWordsArray
      .filter((word) => word.length === 12)
      .join(", ");
    const words13 = foundWordsArray
      .filter((word) => word.length === 13)
      .join(", ");

    return (
      <Grid container justifyContent="center" marginTop={10}>
        <Grid
          container
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <h2>{`Time taken: ${timeTaken.toFixed(2)} milliseconds`}</h2>
          <h2>{`Found ${foundWordsArray.length} words`}</h2>
        </Grid>

        <List style={{ width: "70%" }}>
          {words3.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 3 letters:</h4>
                  <ListItemText primary={words3} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words4.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 4 letters:</h4>
                  <ListItemText primary={words4} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words5.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 5 letters:</h4>
                  <ListItemText primary={words5} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words6.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 6 letters:</h4>
                  <ListItemText primary={words6} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words7.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 7 letters:</h4>
                  <ListItemText primary={words7} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words8.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 8 letters:</h4>
                  <ListItemText primary={words8} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words9.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 9 letters:</h4>
                  <ListItemText primary={words9} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words10.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 10 letters:</h4>
                  <ListItemText primary={words10} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words11.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 11 letters:</h4>
                  <ListItemText primary={words11} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words12.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 12 letters:</h4>
                  <ListItemText primary={words12} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
          {words13.length !== 0 && (
            <>
              <ListItem disablePadding>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                >
                  <h4>Words with 13 letters:</h4>
                  <ListItemText primary={words13} />
                </Grid>
              </ListItem>
              <Grid>
                <Divider variant="middle" />
              </Grid>
            </>
          )}
        </List>
      </Grid>
    );
  };

  return iterateTable(rows, columns, tableData, words);
};

export default FoundWords;
