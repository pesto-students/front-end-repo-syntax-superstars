import Menu from "./Menu";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export default {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
};

export const LeftMenu = {
  args: {
    menuList: [
      {
        title: "Dashboard",
        icon: <HomeIcon color="info" />,
      },
      {
        title: "Projects",
        icon: <QuestionAnswerIcon color="error" />,
      },
      {
        title: "Documents",
        icon: <AssignmentIcon color="warning" />,
      },
      {
        title: "Usage",
        icon: <InsertChartIcon color="success" />,
      },
    ],
  },
};
