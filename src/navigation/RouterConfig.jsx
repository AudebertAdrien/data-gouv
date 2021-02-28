import { ROOT, AUTH, SHOW_ITEM } from "./constants";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import ShowProduct from "../components/ShowProduct";

import { Route, Switch } from "react-router-dom";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path={ROOT} component={Home} />
      <Route exact path={AUTH} component={Auth} />
      <Route path={SHOW_ITEM} component={ShowProduct} />
    </Switch>
  );
}

export default RouterConfig;
