import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Profiles from "../Profiles";
import PAGES from "./route_constants";

const SwitchRoute = ({ setUser, user }) => {
  return (
    <Switch>
      <Route
        path={PAGES.home}
        exact
        render={() => <Home setUser={setUser} user={user} />}
      />
      <Route path={PAGES.profile} render={() => <Profiles user={user} />} />
      <Route path={PAGES.login} render={() => <Login setUser={setUser} />} />
    </Switch>
  );
};

export default SwitchRoute;
