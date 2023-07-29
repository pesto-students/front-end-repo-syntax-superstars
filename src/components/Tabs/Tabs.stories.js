import React from "react";
import Tabs from "./Tabs";
import DescriptionIcon from '@mui/icons-material/Description';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DataUsageIcon from '@mui/icons-material/DataUsage';


export default {
  title: "Tabs",
  component: Tabs,
};

const tabsData = [
  {
    label: "Text Scan",
    icon: <DescriptionIcon />
  },
  {
    label: "File Upload",
    icon: <CloudUploadIcon />,
  },
  {
    label: "Results",
    icon: <DataUsageIcon />,
  }
];

export const Default = () => <Tabs tabsData={tabsData} />;
