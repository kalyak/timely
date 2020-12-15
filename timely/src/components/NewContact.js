import { useState } from "react";
import axios from "axios";
import countryCodes from "./country_codes";
import all from "./firebase/firebase_functions";

const NewContact = ({ user, group }) => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState({});
  const [submitDisabled, setDisableSubmit] = useState(true);

  const handleCountrySelect = (event) => {
    event.preventDefault();
    setZones(["Retrieving time zones..."]);
    setSelectedZone({});
    setDisableSubmit(true);

    const countryCode = event.target.value;
    // console.log(countryCode);
    const q = (countryResults) => {
      const zonenames = countryResults.map((zone) => zone.zoneName);
      setZones(zonenames);
    };

    axios
      .get(
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

  const handleZoneSelect = (event) => {
    event.preventDefault();
    const timezone = event.target.value;

    const qu = (timezoneData) => {
      setSelectedZone(timezoneData.zoneName);
      setDisableSubmit(false);
    };
    axios
      .get(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=${timezone}&fields=zoneName`
      )
      .then((response) => {
        console.log(response.data);
        qu(response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target, user, group);
    all.addContact(event.target, user, group);
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
          <option value=''>Please select a country.</option>

          {countrySelect}
        </select>
      </div>

      <div className='zone-select-menu'>
        <select
          name='zone-select'
          id='zone-select'
          onChange={(event) => handleZoneSelect(event)}
        >
          <option value=''>Please select a timezone.</option>
          {zoneSelect}
        </select>
      </div>

      <button disabled={submitDisabled}>Submit</button>
    </form>
  );
};

export default NewContact;
