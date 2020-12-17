import { useState } from "react";
import timeAPI from "./axios_functions";
import countryCodes from "./country_codes";

const CountryTimezoneSelect = ({ setDisableSubmit }) => {
  const [zones, setZones] = useState([]);

  const handleCountrySelect = (event) => {
    event.preventDefault();
    setZones(["Retrieving time zones..."]);
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
    setDisableSubmit(false);
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
    <div className='country-timezone-select'>
      <div className='country-select-menu form-group row border'>
        <div className='col-sm-4'></div>
        <label htmlFor='country-select' className='col-sm-1 col-form-label'>
          Country:
        </label>
        <div className='col-sm-3'>
          <select
            name='country-select'
            id='country-select'
            onChange={(event) => handleCountrySelect(event)}
          >
            <option value=''>Please select a country.</option>

            {countrySelect}
          </select>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <div className='zone-select-menu form-group row border'>
        <div className='col-sm-4'></div>
        <label htmlFor='zone-select' className='col-sm-1 col-form-label'>
          Timezone:
        </label>
        <div className='col-sm-3'>
          <select
            name='zone-select'
            id='zone-select'
            onChange={(event) => handleZoneSelect(event)}
          >
            <option value=''>Please select a timezone.</option>
            {zoneSelect}
          </select>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
  );
};
export default CountryTimezoneSelect;
