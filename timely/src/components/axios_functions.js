import axios from "axios";

const retrieveZones = (countryCode, q) => {
  const key = process.env.REACT_APP_timezonedb;
  //console.log(countryCode, q);
  axios
    .get(
      `http://api.timezonedb.com/v2.1/list-time-zone?key=${key}&format=json&country=${countryCode}&fields=zoneName`
    )
    .then((response) => {
      //console.log(response.data.zones[0].zoneName);
      q(response.data.zones);
    })
    .catch((error) => {
      console.log("Error");
    });
};

const timeAPI = { retrieveZones };

export default timeAPI;
