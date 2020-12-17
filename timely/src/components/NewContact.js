import { useState } from "react";
import countryCodes from "./country_codes";
import all from "./firebase/firebase_functions";
import { useHistory, withRouter } from "react-router-dom";
import PAGES from "./navigation/route_constants";
import timeAPI from "./axios_functions";

const NewContact = ({ user, group }) => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState({});
  const [submitDisabled, setDisableSubmit] = useState(true);
  const history = useHistory();

  const handleCountrySelect = (event) => {
    event.preventDefault();
    setZones(["Retrieving time zones..."]);
    setSelectedZone({});
    setDisableSubmit(true);

    const countryCode = event.target.value;
    const q = (zoneResults) => {
      const zonenames = zoneResults.map((zone) => zone.zoneName);
      setZones(zonenames);
    };

    timeAPI.retrieveZones(countryCode, q);
  };

  const handleZoneSelect = (event) => {
    event.preventDefault();
    const timezone = event.target.value;

    setSelectedZone(timezone);
    setDisableSubmit(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    all.addContact(event.target, user, group);
    history.push(PAGES.profile);
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

      <button disabled={submitDisabled}>
        {/* <NavLink to={PAGES.profile}>Submit</NavLink> */}
        Submit
      </button>
    </form>
  );
};

export default withRouter(NewContact);
