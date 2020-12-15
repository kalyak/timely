import { useHistory, withRouter } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
    console.log(event.target.user.value);
    history.push("/");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='user'>User: </label>
      <input type='text' id='user' />
      <button>
        {/* <NavLink to={PAGES.home}>Enter</NavLink> */}
        Enter
      </button>
    </form>
  );
};
export default withRouter(Login);
