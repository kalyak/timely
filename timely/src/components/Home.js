import { NavLink } from "react-router-dom";
import Login from "./Login";
import PAGES from "./navigation/route_constants";

const Home = ({ setUser, user, setGroup, setContacts }) => {
  const display =
    user === "" ? (
      <Login setUser={setUser} setGroup={setGroup} setContacts={setContacts} />
    ) : (
      <div>
        <button>
          <NavLink to={PAGES.login}>change user</NavLink>
        </button>
      </div>
    );

  return <div className='home'>{display}</div>;
};

export default Home;
