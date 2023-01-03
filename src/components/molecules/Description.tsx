import { Box, Typography } from "@mui/material";
import React from "react";

interface IDescription {
  title?: string;
  description?: string;
  details?: string;
}

const Description: React.FC<IDescription> = ({
  description,
  details,
  title,
}) => {
  return (
    <Box p={3} color="#fff" mt={2}>
      <Typography fontSize={28}>{title}</Typography>
      <Typography mt={1} fontSize={18}>{description}</Typography>
      <Typography mt={2} >{details}</Typography>
    </Box>
  );
};

export default Description;
