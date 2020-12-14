import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Profiles from "../Profiles";

const SwitchRoute = ({ setUser, user }) => {
  return (
    <Switch>
      <Route
        path='/'
        exact
        render={() => <Home setUser={setUser} user={user} />}
      />
      <Route path='/profile' render={() => <Profiles user={user} />} />
    </Switch>
  );
};

export default SwitchRoute;
