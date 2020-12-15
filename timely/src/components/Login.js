import { NavLink } from "react-router-dom";
import PAGES from "./navigation/route_constants";

const Login = ({ setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
    console.log(event.target.user.value);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='user'>User: </label>
      <input type='text' id='user' />
      <button>
        <NavLink to={PAGES.home}>Enter</NavLink>
      </button>
    </form>
  );
};
export default Login;
