import { useEffect, useState } from "react";
import all from "./firebase/firebase_functions";
import Groups from "./Groups";

const Profiles = ({ user }) => {
  const [group, setGroup] = useState("");
  const [contacts, setGroups] = useState([]);

  useEffect(() => {
    if (user !== "" && group !== "") {
      all.readContacts(setGroups, user, group);
      console.log("groups", contacts);
    }
  }, [user, group]);

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  return (
    <div className='profiles'>
      <h2>Profile Page of {user}!</h2>
      {/* <select>{displayGroups}</select> */}
      <select onChange={(event) => handleChange(event)}>
        <option value=''>[Please select a group.]</option>
        <option value='office'>Office</option>
        <option value='family'>Family</option>
        <option value='discord'>Discord</option>
      </select>
      <Groups contacts={contacts} />
    </div>
  );
};

export default Profiles;
