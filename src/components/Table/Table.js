import React from "react";
import { Table as MuiTable } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const IntelliTable = ({ children }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        {children}
      </MuiTable>
    </TableContainer>
  );
}

export default IntelliTable;