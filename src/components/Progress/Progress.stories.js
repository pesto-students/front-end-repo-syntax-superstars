import React from "react";
import { CircularDeterminate, LinearDeterminate } from "./Progress";

export default {
  title: "Progress",
};

export const Linear = () => <LinearDeterminate value={80} />;
export const Circular = () => (
  <CircularDeterminate value={75} color="success" />
);
