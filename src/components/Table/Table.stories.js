import React from "react";
import Table from "./Table";

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

export const BasicTable = () => <Table rows={rows} columns={columns}></Table>;
