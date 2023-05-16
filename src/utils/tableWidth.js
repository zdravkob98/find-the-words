export const getTableWidth = (tableData) => {
  const length = tableData[0].length;

  if (length >= 2 && length <= 9) {
    return `${length * 100}px`;
  }

  return "1000px";
};
