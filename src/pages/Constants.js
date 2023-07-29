import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export const ROUTES = {
  DASHBOARD_ROUTE: "/",
  PROJECTS_ROUTE: "/projects",
  DOCUMENTS_ROUTE: "/documents",
  USAGE_ROUTE: "/usage",
  PLAN_ROUTE: "/plan",
};

export const SIDEBAR = {
  MENU: [
    {
      title: "Dashboard",
      icon: () => <HomeIcon color="info" />,
      url: ROUTES.DASHBOARD_ROUTE,
    },
    {
      title: "Projects",
      icon: () => <QuestionAnswerIcon color="error" />,
      url: ROUTES.PROJECTS_ROUTE,
    },
    {
      title: "Documents",
      icon: () => <AssignmentIcon color="warning" />,
      url: ROUTES.DOCUMENTS_ROUTE,
    },
    {
      title: "Usage",
      icon: () => <InsertChartIcon color="success" />,
      url: ROUTES.USAGE_ROUTE,
    },
  ],
  CONTENT: "Get more scan & features",
  UPGRADE_NOW: "Upgrade Now",
};
