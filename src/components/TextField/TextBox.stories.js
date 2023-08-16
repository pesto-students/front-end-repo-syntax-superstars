import React from "react";
import { SearchTextBox, TextBox } from "./TextBox";

export default {
  title: "Textbox",
};

export const Input = () => <TextBox label="Email" />;

export const Search = () => <SearchTextBox label="Search by name" />;
