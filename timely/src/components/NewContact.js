import { useState } from "react";
import all from "./firebase/firebase_functions";
import { useHistory, withRouter } from "react-router-dom";
import PAGES from "./navigation/route_constants";
import CountryTimezoneSelect from "./CountryTimezoneSelect";

const NewContact = ({ user, group }) => {
  const [submitDisabled, setDisableSubmit] = useState(true);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    all.addContact(event.target, user, group);
    history.push(PAGES.profile);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className='row mt-3 h2 justify-content-center text-center'>
        New Contact Registration
      </div>

      <div className='form-group row border'>
        <div className='name-input col-sm-4'></div>
        <label htmlFor='name' className='col-sm-1 col-form-label'>
          Name:
        </label>
        <div className='col-sm-3'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            required
          />
          <div className='col-sm-4'></div>
        </div>
      </div>

      <div className='form-group row border'>
        <div className='email-input col-sm-4'></div>
        <label htmlFor='email' className='col-sm-1 col-form-label'>
          Email:
        </label>
        <div className='col-sm-3'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            required
          />
          <div className='col-sm-4'></div>
        </div>
      </div>

      <CountryTimezoneSelect setDisableSubmit={setDisableSubmit} />

      <button disabled={submitDisabled}>Submit</button>
    </form>
  );
};

export default withRouter(NewContact);
