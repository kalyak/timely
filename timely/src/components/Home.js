import { NavLink } from "react-router-dom";
import Login from "./Login";
import PAGES from "./navigation/route_constants";
import TimeNow from "./TimeNow";

const Home = ({ setUser, user }) => {
  const display =
    user === "" ? (
      <Login setUser={setUser} />
    ) : (
      <div>
        <TimeNow user={user} />
        <button>
          <NavLink to={PAGES.login}>change user</NavLink>
        </button>
      </div>
    );
  return <div className='home'>{display}</div>;
};

export default Home;
