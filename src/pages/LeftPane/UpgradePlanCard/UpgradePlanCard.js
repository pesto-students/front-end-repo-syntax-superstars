import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { ROUTES, SIDEBAR } from "../../Constants";
import { StyledCardContent } from "./UpgradePlanCard.styles";

const UpgradePlanCard = () => {
  return (
    <Card
      styles={{
        borderRadius: "1.6rem",
        backgroundColor: "warning.light",
        height: 100,
      }}
    >
      <StyledCardContent>
        <Typography variant="body1">{SIDEBAR.CONTENT}</Typography>
        <Typography variant="subtitle2" color="black">
          <Link to={ROUTES.PLAN_ROUTE}>{SIDEBAR.UPGRADE_NOW}</Link>
        </Typography>
      </StyledCardContent>
    </Card>
  );
};

export default UpgradePlanCard;
