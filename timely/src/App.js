import { useState } from "react";
import Login from "./components/Login";
// import all from "./components/firebase/firebase_functions";
import NavBar from "./components/navigation/NavBar";
import SwitchRoute from "./components/navigation/SwitchRoute";
// import all from "./components/firebase/firebase_functions copy";

const App = () => {
  // all.readData(console.log);

  const [user, setUser] = useState("");

  return (
    <div className='App'>
      <NavBar />

      {/* <Login setUser={setUser}></Login> */}

      <SwitchRoute setUser={setUser} user={user} />
    </div>
  );
};

export default App;
