import Login from "./Login";

const Home = ({ setUser, user }) => {
  const display =
    user === "" ? <Login setUser={setUser}></Login> : <h2>TBC</h2>;
  return (
    <div className='home'>
      <h2>Home Page!</h2>
      {display}
    </div>
  );
};

export default Home;
