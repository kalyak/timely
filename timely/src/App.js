import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import SwitchRoute from "./components/navigation/SwitchRoute";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div className='App'>
      <NavBar />
      <SwitchRoute setUser={setUser} user={user} />
    </div>
  );
};

export default App;
