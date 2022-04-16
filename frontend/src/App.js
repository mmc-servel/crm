import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Users from "./pages/Users";
import NavigationBar from "./layout/NavigationBar";
import { useState } from "react";

function App() {
  const history = useHistory();
  const [sessionid, setSessionID] = useState("");

  let solution = {};

  function onLoginHandler(loginDetails) {
    //alert(loginDetails.username);
    //solution.username=loginDetails.username;

    solution.onLogAreaChange(loginDetails.username);
    setSessionID("spoidfidsfoidsf");
    history.replace("/");
  }

  return (
    <NavigationBar solution={solution}>
      <Switch>
        <Route path="/" exact>
          {sessionid == "" ? ( <Login onLoginHandler={onLoginHandler} /> ) : ( <Main /> )}
        </Route>
        <Route path="/users">
          {sessionid == "" ? ( <Login onLoginHandler={onLoginHandler} /> ) : ( <Users /> )}
        </Route>
        <Route path="/login">
          <Login onLoginHandler={onLoginHandler} />
        </Route>
      </Switch>
    </NavigationBar>
  );
}

export default App;
