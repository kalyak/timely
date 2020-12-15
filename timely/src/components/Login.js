import { useHistory, withRouter } from "react-router-dom";
import PAGES from "./navigation/route_constants";

const Login = ({ setUser, setGroup, setContacts }) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
    setGroup("");
    setContacts([]);
    console.log(event.target.user.value);
    history.push(PAGES.home);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='user'>User: </label>
      <input type='text' id='user' />
      <button>Enter</button>
    </form>
  );
};
export default withRouter(Login);
