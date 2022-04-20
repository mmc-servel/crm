import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Users from "./pages/Users";
import NavigationBar from "./layout/NavigationBar";
import { useState } from "react";

function App() {
  let solution={};
  const history = useHistory();
  const [sessionid, setSessionID] = useState("");

  function onLoginHandler() {
    //alert(loginDetails.username);
    //solution.username=loginDetails.username;
    //solution.username=loginDetails.username; xxxx
    
    sendLoginRequest() 
    history.replace("/");
  }

  function sendLoginRequest() {
    document.body.style.background = 'red';
    fetch('http://localhost:8000/api/login', { method: 'POST', body: JSON.stringify({ 'username': solution.username,'password':solution.password }), headers: { 'Content-Type': 'application/json' } }).then((response) => {
      return response.json();
    }).then((data) => {
      processLoginResponce(data);
    });
  }

  function processLoginResponce(data) {
    console.log('Success:', data);
    document.body.style.background = 'white';
    if(data.responce=="OK"){
      console.log("username",solution.username);
      solution.onLogAreaRefresh(solution.username);
      solution.sessionid=data.data.sessionid;
      setSessionID(data.data.sessionid);
    }else{
      alert(data.message);
      setSessionID("");
      solution.onLogAreaRefresh("");
    }
    history.replace("/");    
  }

  return (
    <NavigationBar solution={solution}>
      <Switch>
        <Route path="/" exact>
          {sessionid == "" ? ( <Login onLoginHandler={onLoginHandler} solution={solution} /> ) : ( <Main /> )}
        </Route>
        <Route path="/users">
          {sessionid == "" ? ( <Login onLoginHandler={onLoginHandler} solution={solution} /> ) : ( <Users /> )}
        </Route>
        <Route path="/login">
          <Login onLoginHandler={onLoginHandler} solution={solution} />
        </Route>
      </Switch>
    </NavigationBar>
  );
}

export default App;
