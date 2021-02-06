import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <div>
      <h1>App.jsx :)</h1>
      <Router>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
