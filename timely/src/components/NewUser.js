import all from "./firebase/firebase_functions";
import { useHistory, withRouter } from "react-router-dom";
import CountryTimezoneSelect from "./CountryTimezoneSelect";
import { useState } from "react";
import PAGES from "./navigation/route_constants";

const NewUser = () => {
  const [submitDisabled, setDisableSubmit] = useState(true);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New user");
    all.addUser(event.target);
    history.push(PAGES.home);
  };
  return (
    <form
      className='new_user_form border'
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className='row mt-3 h2 justify-content-center text-center'>
        New User Registration
      </div>
      <div className='form-group row border'>
        <div className='name-input col-sm-4'></div>
        <label htmlFor='name' className='col-sm-1 col-form-label'>
          New User:
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

      <div className='form-group row border'>
        <div className='email-input col-sm-5'></div>

        <div className='col-sm-2'>
          <button disabled={submitDisabled}>Enter</button>
        </div>
        <div className='col-sm-5'></div>
      </div>

      {/* <button disabled={submitDisabled}>Enter</button> */}
    </form>
  );
};
export default withRouter(NewUser);
