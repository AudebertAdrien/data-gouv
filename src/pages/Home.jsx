import axios from "axios";
import { useState, useEffect } from "react";

import FranceRegion from "../components/FranceDepartments";

function Home() {
  const [dataCovid19, setdataCovid19] = useState([]);
  console.log("home");
  //https://data-gouv-server.herokuapp.com/
  //or
  //http://localhost:3000/
  useEffect(() => {
    axios
      .get(WEBPACK_BASE_URL)
      .then((res) => {
        console.log(res);
        setdataCovid19(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <FranceRegion dataCovid19={dataCovid19} />
    </>
  );
}

export default Home;
