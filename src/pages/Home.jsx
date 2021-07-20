import axios from "axios";
import { useState, useEffect } from "react";

import FranceDepartment from "../components/FranceDepartments";
import DateChange from "../components/Date";
import { format } from "date-fns";
import ModalPopup from "../boostrap-components/ModalPopup";
// let newDateFormat = format(new Date(), `yyyy-dd-MM`);

function Home() {
  const [dataCovid19, setDataCovid19] = useState([]);
  /* 
  let today = new Date();
  let lastWeek = format(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8),
    `yyyy-MM-dd`
  ); */

  let lastWeek = format(new Date("2021", "06", "01"), `yyyy-MM-dd`);

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
      <div className="row my-4"></div>
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center">
          <DateChange setDataCovid19={setDataCovid19} />
        </div>
        <ModalPopup />
        <div className="col-sm-6">
          <ul className="list-group">
            <li className="list-group-item incidence0">Incidence close to 0</li>
            <li className="list-group-item incidence1">
              Incidence less than 5%
            </li>
            <li className="list-group-item incidence2">
              Incidence less than 10%
            </li>
            <li className="list-group-item incidence3">
              Incidence less than 15%
            </li>
            <li className="list-group-item incidence4">
              Incidence greater or equal to 15 %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
