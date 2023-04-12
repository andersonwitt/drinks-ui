import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Image from "../atoms/Image";
import Description from "../molecules/Description";

const DetailsTemplate = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const [drink, setDrink] = useState<any>({});

  const getCurrentDrink = async (id: string) => {
    const response = await fetch(
      `https://localhost:5001/api/drinks/${id}`
    ).then((res) => res.json());

    setDrink(response);
  };

  useEffect(() => {
    getCurrentDrink(id);
  }, [id]);

  return (
    <>
      <div
        style={{
          background: "#484848",
          width: "100%",
          marginTop: theme.spacing(9),
        }}
      >
        <Image src={drink?.image ?? ""} width="100%" />
      </div>
      <Description
        title={drink?.title}
        description={drink?.description}
        details={drink?.details}
      />
    </>
  );
};

export default DetailsTemplate;
