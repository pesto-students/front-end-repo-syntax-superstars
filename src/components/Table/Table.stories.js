import React from "react";
import Table from "./Table";
import { TableBody, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./Table.styles";
import IconButton from "../IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default {
  title: "Table",
  component: Table,
};

function createData(
  title,
  author,
  words,
  plagiarism,
  human_score,
  language,
  actions
) {
  return { title, author, words, plagiarism, human_score, language, actions };
}

const rows = [
  createData("Frozen yoghurt", "untitled", 6, "24%", "4%", "en"),
  createData("Ice cream sandwich", "untitled", 9, "37%", "4%", "en"),
  createData("Eclair", "untitled", 9, "37%", "4%", "en"),
];

const columns = [
  {
    label: "TITLE",
  },
  {
    label: "AUTHOR",
  },
  {
    label: "WORDS",
  },
  {
    label: "PALGIARISM",
  },
  {
    label: "HUMAN_SCORE",
  },
  {
    label: "LANGUAGE",
  },
  {
    label: "ACTIONS",
  },
];

export const BasicTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        {columns.map((cols) => (
          <StyledTableCell>{cols.label}</StyledTableCell>
        ))}
        ;
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
              <StyledTableCell>{row[cols.label]}</StyledTableCell>
              <StyledTableCell align="left">
                <IconButton color="colors.lightGray">
                  <VisibilityIcon />
                </IconButton>
                <IconButton color="colors.lightGray">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
