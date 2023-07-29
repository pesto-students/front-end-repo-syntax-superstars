import { Typography } from "@mui/material";
import Card from "../../../components/Card/Card";
import { SIDEBAR } from "../../Constants";
import { StyledCardContent } from "./UpgradePlanCard.styles";

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
        <Typography variant="subtitle2">{SIDEBAR.UPGRADE_NOW}</Typography>
      </StyledCardContent>
    </Card>
  );
};

export default UpgradePlanCard;
