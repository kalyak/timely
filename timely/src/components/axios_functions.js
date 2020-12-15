import Axios from "axios";

const retrieveCountry = ({ setZones, countryCode }) => {
  const q = (countryResults) => {
    const zonenames = countryResults.map((zone) => zone.zoneName);
    setZones(zonenames);
  };

  Axios.get(
    `http://api.timezonedb.com/v2.1/list-time-zone?key=BSB22B2ARR6V&format=json&country=${countryCode}&fields=zoneName`
  )
    .then((response) => {
      console.log(response.data.zones[0].zoneName);
      q(response.data.zones);
    })
    .catch((error) => {
      console.log("Error");
    });
};

const timeAPI = { retrieveCountry };

export default timeAPI;
