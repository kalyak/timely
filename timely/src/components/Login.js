import { useHistory, withRouter } from "react-router-dom";
import all from "./firebase/firebase_functions";
import PAGES from "./navigation/route_constants";

const Login = ({
  setUser,
  setGroup,
  setContacts,
  setCurrTimezone,
  setUserEmail,
}) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
    setGroup("");
    setContacts([]);

    const setUserTime = (data) => {
      //console.log(setUserEmail);
      setUserEmail(data.email);
      setCurrTimezone(data.timezone);
    };

    all.retrieveUser(event.target.user.value, setUserTime);

    //console.log(event.target.user.value);
    history.push(PAGES.home);
  };

  const handleCreation = () => {
    //console.log("new user");
    history.push(PAGES.newUser);
  };

  return (
    <div className='login-page container justify-content-center text-center mt-3'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>
          Welcome to Timely! For exisiting users, please enter your name here.
        </p>
        <div className='form-group row'>
          <div className='col-sm-4'></div>
          <label htmlFor='user' className='col-sm-1 col-form-label'>
            User:
          </label>
          <div className='col-sm-3'>
            <input type='text' className='form-control' id='user' />
            <div className='col-sm-4'></div>
          </div>
        </div>

        <button>Enter</button>
      </form>
      <br />
      <br />
      <p>If you are new to this site, please register below.</p>
      <button onClick={() => handleCreation()}>Create New User</button>
    </div>
  );
};
export default withRouter(Login);
