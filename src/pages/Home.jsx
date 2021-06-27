import axios from "axios";
import { useState, useEffect } from "react";

import FranceDepartment from "../components/FranceDepartments";
import DateChange from "../components/Date";

import { format } from "date-fns";
// let newDateFormat = format(new Date(), `yyyy-dd-MM`);

function Home() {
  const [dataCovid19, setDataCovid19] = useState([]);
  /* WEBPACK_BASE_URL is a global variable created at compile time by webpack 
  https://data-gouv-server.herokuapp.com/ or http://localhost:3000/
  */
  let today = new Date();
  let lastWeek = format(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
    `yyyy-MM-dd`
  );

  useEffect(() => {
    axios
      .post(WEBPACK_BASE_URL, lastWeek, {
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
      <div className="row">
        <FranceDepartment dataCovid19={dataCovid19} />
      </div>
      <div className="row my-4">
        <p className="text-center">
          Lastest data known on{" "}
          <span className="lastWeekMessage">{lastWeek}</span>
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center">
          <DateChange setDataCovid19={setDataCovid19} />
        </div>
        <div className="col-sm-6">
          <ul className="list-group">
            <li className="list-group-item incidence0">Incidence close to 0</li>
            <li className="list-group-item incidence1">
              Incidence less than 15%
            </li>
            <li className="list-group-item incidence2">
              Incidence between 15% and 30%
            </li>
            <li className="list-group-item incidence3">
              Incidence greater or equal to 30 %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
