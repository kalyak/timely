/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import all from "./firebase/firebase_functions";
import Groups from "./Groups";
import PAGES from "./navigation/route_constants";
const Contacts = ({
  user,
  setGroup,
  group,
  setContacts,
  contacts,
  currentTime,
}) => {
  useEffect(() => {
    console.log("Contacts");
    if (user !== "" && group !== "") {
      all.retrieveContacts(contacts, setContacts, user, group);
      console.log("Contacts", contacts);
    }
  }, [user, group]);

  const handleChange = (event) => {
    setGroup(event.target.value);
    console.log(group);
    setContacts([]);
  };

  return (
    <div className='contacts'>
      <h2>Contact Page of {user}!</h2>
      <select value={group} onChange={(event) => handleChange(event)}>
        <option value=''>[Please select a group.]</option>
        <option value='colleagues'>Colleagues</option>
        <option value='family'>Family</option>
        <option value='discord'>Friends</option>
      </select>

      {/* <div className='group_selection'>
      {group !== "" ? (
        
          (contacts.length !== 0 ? (
          <div className='groups'>
            <Groups
              contacts={contacts}
              setContacts={setContacts}
              currentTime={currentTime}
            />
          </div>
          ) : (<div className='no_contacts'>"No contacts found."</div>))
          <button>
            <NavLink to={PAGES.newContact}>New Contact</NavLink>
          </button>
      ) : (
        ""
      )}
      </div> */}

      {group !== "" ? (
        <div>
          {contacts.length !== 0 ? (
            <div className='groups'>
              <Groups
                contacts={contacts}
                setContacts={setContacts}
                currentTime={currentTime}
              />
            </div>
          ) : (
            <div className='no_contacts'>No contacts found.</div>
          )}
          <button>
            <NavLink to={PAGES.newContact}>New Contact</NavLink>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contacts;
