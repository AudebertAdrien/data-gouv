import Home from "../pages/Home";

import { Route, Switch } from "react-router-dom";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="*" render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
}

export default RouterConfig;
