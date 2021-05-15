import axios from "axios";
import { useState, useEffect } from "react";

import FranceDepartment from "../components/FranceDepartments";
import DateChange from "../components/Date";

// import { format } from "date-fns";

function Home() {
  const [dataCovid19, setDataCovid19] = useState([]);
  /* WEBPACK_BASE_URL is a global variable created at compile time by webpack 
  https://data-gouv-server.herokuapp.com/ or http://localhost:3000/
  */

  // let newDateFormat = format(new Date(), `yyyy-dd-MM`);
  let newDateFormat = "2021-04-30";

  useEffect(() => {
    axios
      .post(WEBPACK_BASE_URL, newDateFormat, {
        headers: { "content-type": "text/plain; charset=UTF-8" },
      })
      .then((res) => {
        setDataCovid19(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <FranceDepartment dataCovid19={dataCovid19} />
      <DateChange setDataCovid19={setDataCovid19} />
    </div>
  );
}

export default Home;
