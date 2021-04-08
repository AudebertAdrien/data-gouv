import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

import LinkPages from "./components/LinkPages";

function App() {
  return (
    <Router>
      <LinkPages />

      <RouterConfig />
    </Router>
  );
}

export default App;
