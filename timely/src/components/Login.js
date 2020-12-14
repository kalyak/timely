const Login = ({ setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
    console.log(event.bubbles);
    console.log(event.target.user.value);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='user'>User: </label>
      <input type='text' id='user' />
      <button>Enter</button>
    </form>
  );
};
export default Login;
