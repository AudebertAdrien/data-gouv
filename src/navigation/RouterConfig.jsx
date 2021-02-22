import { ROOT, AUTH } from "./constants";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

import { Route, Switch } from "react-router-dom";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path={ROOT} component={Home} />
      <Route exact path={AUTH} component={Auth} />
    </Switch>
  );
}

export default RouterConfig;
