import moment from "moment";

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user !== "" && user !== "undefined") {
    return JSON.parse(user);
  }
};

export const setUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const formatBytes = (bytes) => {
  var marker = 1024; // Change to 1000 if required
  var decimal = 3;
  var kiloBytes = marker; // One Kilobyte is 1024 bytes
  var megaBytes = marker * marker; // One MB is 1024 KB
  var gigaBytes = marker * marker * marker; // One GB is 1024 MB

  if (bytes < kiloBytes) return bytes + " Bytes";
  else if (bytes < megaBytes)
    return (bytes / kiloBytes).toFixed(decimal) + " KB";
  else if (bytes < gigaBytes)
    return (bytes / megaBytes).toFixed(decimal) + " MB";
  else return (bytes / gigaBytes).toFixed(decimal) + " GB";
};

export const getTime = (date) => {
  return moment(date).fromNow();
};

export const setUpgragePlan = (plan) => {
  sessionStorage.setItem("plan", JSON.stringify(plan));
};

export const getUpgragePlan = () => {
  const plan = sessionStorage.getItem("plan");
  if (plan) {
    return JSON.parse(plan);
  }
};
