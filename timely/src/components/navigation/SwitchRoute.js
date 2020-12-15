import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import NewContact from "../NewContact";
import Profiles from "../Profiles";
import PAGES from "./route_constants";

const SwitchRoute = ({
  setUser,
  user,
  setGroup,
  group,
  setContacts,
  contacts,
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
          <Profiles
            user={user}
            setGroup={setGroup}
            group={group}
            setContacts={setContacts}
            contacts={contacts}
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
          />
        )}
      />
      <Route
        path={PAGES.new}
        render={() => <NewContact user={user} group={group} />}
      />
    </Switch>
  );
};

export default SwitchRoute;
