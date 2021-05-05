import axios from "axios";
import France from "@socialgouv/react-departements";
import { useState, useEffect } from "react";

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

  console.log(incidenceData);
  return (
    <>
      <div>Home</div>
      <France departements={[33]} />
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
