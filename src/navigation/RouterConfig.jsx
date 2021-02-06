import { ROOT, AUTH } from "Navigation/constants";
import Home from "Components/Home";
import Auth from "Components/Auth";

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
