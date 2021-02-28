import { BrowserRouter as Router, Link } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import LinkPages from "./components/LinkPages";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Navbar />
        <LinkPages />

        <RouterConfig />
      </Router>
    </Container>
  );
}

export default App;
