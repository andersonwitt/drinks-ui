import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

interface ICard {
  image: string;
  title: string;
  description: string;
  value: string;
}

const Card: React.FC<ICard> = ({ title, description, image, value }) => {
  const history = useHistory();

  const handleClickCard = () => {
    history.push(`/info/${value}`);
  };

  return (
    <MuiCard sx={{ maxWidth: 345, minHeight: 380, background: "#484848" }}>
      <CardActionArea onClick={handleClickCard}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
