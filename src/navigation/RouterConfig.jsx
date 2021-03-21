import Home from "../pages/Home";
import Auth from "../pages/Auth";

import ShowProduct from "../components/ShowProduct";

import { Route, Switch } from "react-router-dom";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/show-product/:id" component={ShowProduct} />
      <Route path="*" render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
}

export default RouterConfig;
