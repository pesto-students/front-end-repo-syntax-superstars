import React from "react";
import Dialog from "./Dialog";

export default {
  title: "Dialog",
  component: Dialog,
};

export const BasicDialog = () => (
  <Dialog
    header="Delete Project"
    content="Are you sure to delete the project?"
    open={true}
    isDelete={true}
  />
);
