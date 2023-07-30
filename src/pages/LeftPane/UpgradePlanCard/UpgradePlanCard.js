import { Typography } from "@mui/material";
import Card from "../../../components/Card/Card";
import { ROUTES, SIDEBAR } from "../../Constants";
import { StyledCardContent } from "./UpgradePlanCard.styles";
import { Link } from "react-router-dom";

const UpgradePlanCard = () => {
  return (
    <Card
      styles={{
        borderRadius: "16px",
        backgroundColor: "warning.light",
        height: 100,
      }}
    >
      <StyledCardContent sx={{}}>
        <Typography variant="p">{SIDEBAR.CONTENT}</Typography>
        <Typography variant="subtitle2" color="black">
          <Link to={ROUTES.PLAN_ROUTE}>{SIDEBAR.UPGRADE_NOW}</Link>
        </Typography>
      </StyledCardContent>
    </Card>
  );
};

export default UpgradePlanCard;
