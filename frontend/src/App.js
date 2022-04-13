import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Users from "./pages/Users";
import NavigationBar from "./layout/NavigationBar";
import { useState } from "react";

function App() {
  const history = useHistory();
  const [isLoogedIn, tryToLogin] = useState(false);

  function onLoginHandler() {
    tryToLogin(true);
    history.replace("/");
  }

  return (
    <NavigationBar>
      {isLoogedIn ? null : <Redirect to="/login"></Redirect>}
      <Switch>
        <Route path="/" exact>
          <Main  />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/login">
          <Login onLoginHandler={onLoginHandler} />
        </Route>
      </Switch>
    </NavigationBar>
  );
}

export default App;
