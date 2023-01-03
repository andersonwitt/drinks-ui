import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory, useLocation } from "react-router";

const AppBar = () => {
  const location = useLocation();
  const history = useHistory();

  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <MuiAppBar>
      <Toolbar
        style={{
          height: 70,
        }}
      >
        {location.pathname !== "/" && (
          <IconButton onClick={handleClickBack} color="secondary">
            <ArrowBackIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <Typography fontSize={18}>Menu</Typography>
        </Box>
        <LocalBarIcon />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
