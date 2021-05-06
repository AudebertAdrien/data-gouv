import axios from "axios";
import { useState, useEffect } from "react";

import FranceDepartements from "./FranceDepartements";

function Home() {
  const [incidenceData, setIncidenceData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setIncidenceData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Home</div>
      <FranceDepartements incidenceData={incidenceData} />
      <div>
        {incidenceData &&
          incidenceData.map((item) => {
            return <p key={item._id}>{item._id}</p>;
          })}
      </div>
    </>
  );
}

export default Home;
//https://data-gouv-server.herokuapp.com/
//http://localhost:3000/
