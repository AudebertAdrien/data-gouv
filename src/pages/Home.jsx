import axios from "axios";
import { useState, useEffect } from "react";

import FranceRegion from "../components/FranceDepartments";

function Home() {
  const [dataCovid19, setdataCovid19] = useState([]);
  /* WEBPACK_BASE_URL is a global variable created at compile time by webpack 
  https://data-gouv-server.herokuapp.com/ or http://localhost:3000/
  */
  useEffect(() => {
    axios
      .get(WEBPACK_BASE_URL)
      .then((res) => {
        setdataCovid19(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <FranceRegion dataCovid19={dataCovid19} />
    </div>
  );
}

export default Home;
