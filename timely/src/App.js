import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import SwitchRoute from "./components/navigation/SwitchRoute";
import TimeNow from "./components/TimeNow";

const App = () => {
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [contacts, setContacts] = useState([]);
  const [currentTime, setCurrentTime] = useState({});

  return (
    <div className='App'>
      <NavBar />
      <TimeNow
        user={user}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />

      <SwitchRoute
        setUser={setUser}
        user={user}
        setGroup={setGroup}
        group={group}
        setContacts={setContacts}
        contacts={contacts}
        setCurrentTime={setCurrentTime}
        timeNow={currentTime}
      />
    </div>
  );
};

export default App;
