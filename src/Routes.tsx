import { Container } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppBar from "./components/molecules/AppBar";
import Details from "./components/pages/Details";
import Menu from "./components/pages/Menu";

const Routes = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Container sx={{ mt: 12 }} maxWidth="lg">
            <Menu />
          </Container>
        </Route>
        <Route exact path="/info/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
