import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./Table.styles";
import IconButton from "../IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Table = ({ rows, columns, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((cols) => (
              <StyledTableCell>{cols.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((cols) => (
                <>
                  {cols.label !== "ACTIONS" ? (
                    <StyledTableCell>{row[cols.field]}</StyledTableCell>
                  ) : (
                    <StyledTableCell align="left">
                      <IconButton color="colors.lightGray">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        color="colors.lightGray"
                        onClick={() => onDelete(row._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  )}
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
