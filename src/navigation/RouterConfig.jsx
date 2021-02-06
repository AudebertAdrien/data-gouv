// import { ROOT, AUTH } from "./navigation/CONSTANTS";
import Home from "Components/Home";
// import Auth from "./components/Auth";

import { Route, Switch } from "react-router-dom";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      {/* <Route exact path={AUTH} component={Auth} />
      <Route path="*">
        <NotFound />
      </Route> */}
    </Switch>
  );
}

export default RouterConfig;
