import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import SwitchRoute from "./components/navigation/SwitchRoute";

const App = () => {
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [contacts, setContacts] = useState([]);
  const [convertTimeArray, updateTimeArray] = useState([]);

  return (
    <div className='App'>
      <NavBar />
      <SwitchRoute
        setUser={setUser}
        user={user}
        setGroup={setGroup}
        group={group}
        setContacts={setContacts}
        contacts={contacts}
        updateTimeArray={updateTimeArray}
        convertTimeArray={convertTimeArray}
      />
    </div>
  );
};

export default App;
