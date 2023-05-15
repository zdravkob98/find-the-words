import React, { useState } from "react";

import Header from "./components/Header";
import BoardSize from "./components/BoardSize";
import EmptyBoard from "./components/EmptyBoard";
import PreviewBoard from "./components/PreviewBoard";
import FoundWords from "./components/FoundWords";

function App() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [showPreviewTable, setShowPreviewTable] = useState(false);

  return (
    <>
      <Header />
      {!submitted && (
        <BoardSize
          rows={rows}
          columns={columns}
          selectedRows={(rowsCount) => setRows(rowsCount)}
          selectedColumns={(columnsCount) => setColumns(columnsCount)}
          submitted={(data) => setSubmitted(data)}
          tableFormat={(data) => setTableData(data)}
        />
      )}
      {submitted && !showPreviewTable && (
        <EmptyBoard
          tableData={tableData}
          rows={rows}
          columns={columns}
          tableDataChange={(data) => setTableData(data)}
          previewTable={(data) => setShowPreviewTable(data)}
        />
      )}
      {showPreviewTable && (
        <>
          <PreviewBoard tableData={tableData} />

          <FoundWords rows={rows} columns={columns} tableData={tableData} />
        </>
      )}
    </>
  );
}

export default App;
