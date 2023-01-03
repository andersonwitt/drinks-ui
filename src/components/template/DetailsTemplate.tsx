import { useTheme } from "@mui/material";
import { useParams } from "react-router";
import { categories } from "../../utils/Db";
import Image from "../atoms/Image";
import Description from "../molecules/Description";

const DetailsTemplate = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();

  const getCurrentDrink = (id: string) =>
    categories
      .flatMap((category) => category.items)
      .find((item) => item.id === id);

  return (
    <>
      <div
        style={{
          background: "#484848",
          width: "100%",
          marginTop: theme.spacing(9),
        }}
      >
        <Image src={getCurrentDrink(id)?.image ?? ""} width="100%" />
      </div>
      <Description
        title={getCurrentDrink(id)?.title}
        description={getCurrentDrink(id)?.description}
        details={getCurrentDrink(id)?.details}
      />
    </>
  );
};

export default DetailsTemplate;
