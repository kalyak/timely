import { NavLink } from "react-router-dom";
import Login from "./Login";
import PAGES from "./navigation/route_constants";
import { useHistory, withRouter } from "react-router-dom";

const Home = ({ setUser, user, setGroup, setContacts }) => {
  const history = useHistory();

  const handleChangeUser = (event) => {
    event.preventDefault();

    history.push(PAGES.login);
  };

  const display =
    user === "" ? (
      <Login setUser={setUser} setGroup={setGroup} setContacts={setContacts} />
    ) : (
      <div className='row justify-content-center'>
        <button
          type='button'
          className='btn btn-secondary mt-3'
          onClick={(event) => handleChangeUser(event)}
        >
          change user
        </button>
      </div>
    );

  return <div className='home'>{display}</div>;
};

export default withRouter(Home);
