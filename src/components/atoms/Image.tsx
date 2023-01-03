import { useMediaQuery, useTheme } from "@mui/material";

interface IImageProps {
  src: string;
  width: string | number;
}

const Image: React.FC<IImageProps> = ({ src, width }) => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <img
      alt="drink"
      src={src}
      height={responsive ? "30%" : "300px"}
      width={width}
      style={{
        objectFit: "contain",
      }}
    />
  );
};

export default Image;
