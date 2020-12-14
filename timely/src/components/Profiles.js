/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import all from "./firebase/firebase_functions";
import Groups from "./Groups";
import PAGES from "./navigation/route_constants";

const Profiles = ({ user, setGroup, group, setContacts, contacts }) => {
  useEffect(() => {
    if (user !== "" && group !== "") {
      all.readContacts(setContacts, user, group);
      console.log("Contacts", contacts);
    }
  }, [user, group]);

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  return (
    <div className='profiles'>
      <h2>Profile Page of {user}!</h2>={" "}
      <select onChange={(event) => handleChange(event)}>
        <option value=''>[Please select a group.]</option>
        <option value='office'>Office</option>
        <option value='family'>Family</option>
        <option value='discord'>Discord</option>
      </select>
      <Groups contacts={contacts} />
      <button>
        <NavLink to={PAGES.new}>New Contact</NavLink>
      </button>
    </div>
  );
};

export default Profiles;
