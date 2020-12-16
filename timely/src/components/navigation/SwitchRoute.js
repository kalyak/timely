import { Route, Switch } from "react-router-dom";
import What from "../ConvertTime";
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
  setCurrentTime,
  currentTime,
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
          />
        )}
      />
      <Route
        path={PAGES.new}
        render={() => <NewContact user={user} group={group} />}
      />

      <Route
        path={PAGES.dayjs}
        render={() => (
          <What
            user={user}
            contacts={contacts}
            setContacts={setContacts}
            currentTime={currentTime}
          />
        )}
      />
    </Switch>
  );
};

export default SwitchRoute;
