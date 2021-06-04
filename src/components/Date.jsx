import { useState, useEffect } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

import { format } from "date-fns";

function DateChange({ setDataCovid19 }) {
  const date = new Date();
  const [startDate, setStartDate] = useState(date.setDate(date.getDate() - 7));

  function handleDateChange(date) {
    console.log(date);
    let newDateFormat = format(new Date(date), `yyyy-MM-dd`);
    axios
      .post(WEBPACK_BASE_URL, newDateFormat, {
        headers: { "content-type": "text/plain; charset=UTF-8" },
      })
      .then((res) => {
        console.log(res);
        setDataCovid19(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // add the selected date at DatePicker
    setStartDate(date);
  }
  return (
    <DatePicker
      locale="fr"
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={handleDateChange}
      inline
    />
  );
}

export default DateChange;
