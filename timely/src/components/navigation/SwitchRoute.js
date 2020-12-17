import { Route, Switch } from "react-router-dom";
import What from "../ConvertTime";
import Home from "../Home";
import Login from "../Login";
import NewContact from "../NewContact";
import Contacts from "../Contacts";
import PAGES from "./route_constants";
import NewUser from "../NewUser";

const SwitchRoute = ({
  setUser,
  user,
  setGroup,
  group,
  setContacts,
  contacts,
  setCurrentTime,
  currentTime,
  currTimezone,
  setCurrTimezone,
  userEmail,
  setUserEmail,
}) => {
  return (
    <Switch>
      <Route
        path={PAGES.home}
        exact
        render={() => (
          <Home
            setUser={setUser}
            user={user}
            setGroup={setGroup}
            setContacts={setContacts}
          />
        )}
      />
      <Route
        path={PAGES.profile}
        render={() => (
          <Contacts
            user={user}
            setGroup={setGroup}
            group={group}
            setContacts={setContacts}
            contacts={contacts}
            currentTime={currentTime}
          />
        )}
      />
      <Route
        path={PAGES.login}
        render={() => (
          <Login
            setUser={setUser}
            setGroup={setGroup}
            setContacts={setContacts}
            setCurrTimezone={setCurrTimezone}
            setUserEmail={setUserEmail}
          />
        )}
      />
      <Route
        path={PAGES.newContact}
        render={() => <NewContact user={user} group={group} />}
      />

      <Route
        path={PAGES.convert}
        render={() => (
          <What
            user={user}
            contacts={contacts}
            setContacts={setContacts}
            currentTime={currentTime}
          />
        )}
      />

      <Route path={PAGES.newUser}>
        <NewUser />
      </Route>
    </Switch>
  );
};

export default SwitchRoute;
