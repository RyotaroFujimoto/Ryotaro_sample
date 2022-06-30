import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  marginBottom: 10,
});

const TCard = (props) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{props.card.text}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TCard;
