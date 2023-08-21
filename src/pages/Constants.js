import AssignmentIcon from "@mui/icons-material/Assignment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export const ROUTES = {
  DASHBOARD_ROUTE: "/",
  PROJECTS_ROUTE: "/projects",
  PROJECT_ROUTE: "/project/:id",
  DOCUMENTS_ROUTE: "/documents",
  DOCUMENT_ROUTE: "/project/:id/document/:docId",
  USAGE_ROUTE: "/usage",
  PLAN_ROUTE: "/plan",
  LOGIN_ROUTE: "/login",
  REGISTER_ROUTE: "/register",
  PROFILE_ROUTE: "/profile",
  REDIRECT_PLAN_ROUTE: "/plan/:value",
};

export const SIDEBAR = {
  MENU: [
    {
      title: "Dashboard",
      icon: () => <HomeIcon color="info" fontSize="large" />,
      url: ROUTES.DASHBOARD_ROUTE,
    },
    {
      title: "Projects",
      icon: () => <QuestionAnswerIcon color="error" fontSize="large" />,
      url: ROUTES.PROJECTS_ROUTE,
    },
    {
      title: "Documents",
      icon: () => <AssignmentIcon color="warning" fontSize="large" />,
      url: ROUTES.DOCUMENTS_ROUTE,
    },
    {
      title: "Usage",
      icon: () => <InsertChartIcon color="success" fontSize="large" />,
      url: ROUTES.USAGE_ROUTE,
    },
  ],
  CONTENT: "Get more scan & features",
  UPGRADE_NOW: "Upgrade Now",
};

export const DOCUMENT = {
  tabsData: [
    {
      label: "Text Scan",
      icon: () => <DescriptionIcon fontSize="large" />,
      show: true,
    },
    {
      label: "File Upload",
      icon: () => <CloudUploadIcon fontSize="large" />,
      show: true,
    },
    {
      label: "Results",
      icon: () => <DataUsageIcon fontSize="large" />,
      show: true,
    },
  ],
};

export const MODAL = {
  DELETE_PROJECT: "Delete Project",
  DELETE_PROJECT_MESSAGE: "Are you sure that you want to delete your project?",
  DELETE_DOCUMENT: "Delete Document",
  DELETE_DOCUMENT_MESSAGE:
    "Are you sure that you want to delete your document?",
  RENAME_PROJECT: "Rename Project",
  RENAME_PROJECT_MESSAGE: "Please enter new title for your project.",
  RENAME_DOCUMENT: "Rename Document",
  RENAME_DOCUMENT_MESSAGE: "Please enter new title for your document.",
};
