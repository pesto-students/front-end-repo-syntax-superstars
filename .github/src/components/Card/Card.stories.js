import React from "react";
import { CardActions, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import Chip from "../Chip/Chip";
import { DeleteIconButton, EditIconButton } from "../IconButton/IconButton.stories";
import { PrimaryButton } from "../Button/Button";
import { StyledCardContent } from "./Card.styles";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const BasicCard = () => (
  <Card styles={{ maxWidth: '200px' }}>
    <CardHeader title="Untitled" />
    <Divider />
    <CardContent>
      2 documents  
    </CardContent>
    <Divider />
    <CardActions>
      <Chip content="1 week ago" color="primary" />
      <div>
        <DeleteIconButton />
        <EditIconButton />
      </div>
    </CardActions>
  </Card>
);

export const PlainCard = () => (
  <Card>
    <StyledCardContent>
      <AddCircleIcon />
      New Project
    </StyledCardContent>
  </Card>
);

const plan = {
  title: 'Essential',
  monthly_amount: '$12',
  yearly_amount: '$144',
  description: 'Text...'
}

export const CardWithButtton = () => (
  <Card styles={{ maxWidth: 250, padding: '16px' }}>
    <CardContent>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: '18px', fontWeight: 'bold' }} color="text.title">
        {plan.title}
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }} color="text.title">
          {plan.monthly_amount}/month
      </Typography>
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} color="text.main">
          Billed {plan.yearly_amount}/year
      </Typography>
      <Typography sx={{ mt: '24px' }}>
        {plan.description}
      </Typography>
    </CardContent>
    <CardActions>
      <PrimaryButton label="Get started" width='100%'  />
    </CardActions>
  </Card>
)

