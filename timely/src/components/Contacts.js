/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  useEffect(() => {
    //console.log("Contacts");
    if (user !== "" && group !== "") {
      all.retrieveContacts(contacts, setContacts, user, group);
      //console.log("Contacts", contacts);
    }
  }, [user, group]);

  const handleChange = (event) => {
    setGroup(event.target.value);
    //console.log(group);
    setContacts([]);
  };

  const handleCreation = () => {
    //console.log("new user");
    history.push(PAGES.newContact);
  };

  return user !== "" ? (
    <div className='contacts container '>
      <h2 className='text-center'>Contact Page of {user}!</h2>

      <div className='group-select container row justify-content-center'>
        <select value={group} onChange={(event) => handleChange(event)}>
          <option value=''>[Please select a group.]</option>
          <option value='colleagues'>Colleagues</option>
          <option value='family'>Family</option>
          <option value='discord'>Friends</option>
        </select>
      </div>

      {group !== "" ? (
        <div>
          <div className='new-contact-button container row justify-content-end'>
            <button
              onClick={(event) => {
                handleCreation(event);
              }}
            >
              New Contact
            </button>
          </div>

          {contacts.length !== 0 ? (
            <div className='groups'>
              <Groups
                contacts={contacts}
                setContacts={setContacts}
                currentTime={currentTime}
              />{" "}
              <div className='new-contact-button container row justify-content-end'>
                <button
                  onClick={(event) => {
                    handleCreation(event);
                  }}
                >
                  New Contact
                </button>
              </div>
            </div>
          ) : (
            <div className='no_contacts'>No contacts found.</div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <h2 className='text-center mt-3'>
      Please select a user in the Profile Page first.
    </h2>
  );
};

export default Contacts;
