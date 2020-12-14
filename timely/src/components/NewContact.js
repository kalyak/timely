import { useState } from "react";
import axios from "axios";
import countryCodes from "./country_codes";

const NewContact = () => {
  const [zones, setZones] = useState([]);
  //   const [zoneName, setZoneName] = useState("");

  const handleCountrySelect = (event) => {
    event.preventDefault();
    setZones(["Retrieving time zones..."]);

    const countryCode = event.target.value;
    // console.log(countryCode);
    const q = (countryResults) => {
      const zonenames = countryResults.map((zone) => zone.zoneName);
      setZones(zonenames);
    };

    axios
      .get(
        `http://api.timezonedb.com/v2.1/list-time-zone?key=BSB22B2ARR6V&format=json&country=${countryCode}`
      )
      .then((response) => {
        console.log(response.data.zones);
        q(response.data.zones);
        // setSearchResult(response.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  //   const handleZoneSelect = (event) => {
  //     const zoneSelect = event.target.value;
  //     setZoneName(zoneSelect);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const countrySelect = countryCodes.map((country) => (
    <option value={country.code} key={country.code}>
      {country.name}
    </option>
  ));

  const zoneSelect = zones.map((zoneName) => (
    <option value={zoneName} key={zoneName}>
      {zoneName}
    </option>
  ));

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className='name-input'>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' required />
      </div>

      <div className='country-select-menu'>
        <select
          name='country-select'
          id='country-select'
          onChange={(event) => handleCountrySelect(event)}
        >
          {countrySelect}
        </select>
      </div>

      <div className='zone-select-menu'>
        <select
          name='zone-select'
          id='zone-select'
          //   onChange={(event) => handleZoneSelect(event)}
        >
          {zoneSelect}
        </select>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default NewContact;
