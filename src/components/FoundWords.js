import React from "react";
import {
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { words } from "../components/Words";
import "../App.css";

const dfs = (table, visited, row, col, word, currentWord, found) => {
  if (word === "") {
    const length = currentWord.length;
    if (!found.hasOwnProperty(`words${length}`)) {
      found[`words${length}`] = []; // Create a new list for words of this length
    }
    if (!found[`words${length}`].includes(currentWord)) {
      found[`words${length}`].push(currentWord);
    }
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

export const iterateTable = (rows, cols, tableData) => {
  const foundWords = {};
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
  const count = Object.values(foundWords).reduce(
    (accumulator, currentValue) => accumulator + currentValue.length,
    0
  );

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
        <h2>{`Found ${count} words`}</h2>
      </Grid>
      <Box
        boxShadow={5}
        borderRadius={16}
        bgcolor="white"
        p={3}
        marginBottom={2}
        width="80%"
      >
        <List className="list-component">
          {Object.entries(foundWords)
            .sort((a, b) => a[0].slice(5) - b[0].slice(5))
            .map(([key, value]) => (
              <React.Fragment key={key}>
                {value.length !== 0 && (
                  <>
                    <ListItem disablePadding>
                      <Grid
                        item
                        container
                        xs={12}
                        display="flex"
                        flexDirection="column"
                      >
                        <h4>{`Words with ${key.slice(5)} letters:`}</h4>
                        <ListItemText primary={value.join(", ")} />
                      </Grid>
                    </ListItem>
                    <Grid>
                      <Divider variant="fullWidth" />
                    </Grid>
                  </>
                )}
              </React.Fragment>
            ))}
        </List>
      </Box>
    </Grid>
  );
};
