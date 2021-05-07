import axios from "axios";
import { useState, useEffect } from "react";

import FranceDepartements from "./FranceDepartements";

function Home() {
  const [dataCovid19, setdataCovid19] = useState([]);

  console.log(dataCovid19);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setdataCovid19(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Home</div>
      <FranceDepartements dataCovid19={dataCovid19} />
    </>
  );
}

export default Home;
//https://data-gouv-server.herokuapp.com/
//http://localhost:3000/
