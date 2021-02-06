import "./styles/main.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <div>
      <h1>App.jsx :)</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="auth">Auth</Link>
          </li>
        </ul>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
