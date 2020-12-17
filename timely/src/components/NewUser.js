import all from "./firebase/firebase_functions";

const NewUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New user");
    all.addUser(event.target.user.value);
  };
  return (
    <form className='new_user_form' onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor='user'>New User: </label>
      <input type='text' id='user' />
      <button>Enter</button>
    </form>
  );
};
export default NewUser;
