import { Grid } from "@mui/material";
import Card from "../molecules/Card";

export type DrinkMenuItemType = {
  image: string;
  title: string;
  description: string;
  id: string;
};

interface IDrinksMenu {
  items: DrinkMenuItemType[];
}

const DrinksMenu: React.FC<IDrinksMenu> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid key={`grid-card-${index}`} item xs={6} md={4}>
          <Card
            description={item.description}
            image={item.image}
            title={item.title}
            value={item.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DrinksMenu;
