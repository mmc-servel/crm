import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Users from "./pages/Users";
import NavigationBar from "./layout/NavigationBar";
import { useState } from "react";

let solution={"sessionid":""};

function App() {
  
  const history = useHistory();
  const [summy, setDummy] = useState("");

  function onLoginHandler() {
    sendLoginRequest() 
    history.replace("/");
  }
//------------------------------------------------------
function getProductsRequest() {
  fetch('api/products', { method: 'POST', body: JSON.stringify({}), headers: { 'Content-Type': 'application/json' } }).then((response) => {
    return response.json();
  }).then((data) => {
    solution.products=[...data.data];
    console.log("Products",data.data);
    console.log("Solution",solution.products);
    solution.updatemain(Math.random());
    if(data.responce!=="OK"){
      alert(data.message);
    }
  });
}
//------------------------------------------------------
  function sendLoginRequest() {
    document.body.style.background = 'red';
    fetch('api/login', { method: 'POST', body: JSON.stringify({ 'username': solution.username,'password':solution.password }), headers: { 'Content-Type': 'application/json' } }).then((response) => {
      return response.json();
    }).then((data) => {
      processLoginResponce(data);
    });
  }

  function processLoginResponce(data) {
    console.log('Success:', data);
    document.body.style.background = 'white';
    if(data.responce==="OK"){
      console.log("username",solution.username);
      solution.onLogAreaRefresh(solution.username);
      solution.sessionid=data.data.sessionid;
      setDummy(data.data.sessionid);
    }else{
      solution.sessionid="";
      solution.username="";
      solution.onLogAreaRefresh("");
      setDummy("");
      alert(data.message);
    }
    getProductsRequest();
    history.replace("/");    
  }

  return (
    <NavigationBar solution={solution}>
      <Switch>
        <Route path="/" exact>
          {solution.sessionid === "" ? ( <Login onLoginHandler={onLoginHandler} solution={solution} /> ) : ( <Main solution={solution} getProductsRequest={getProductsRequest}/> )}
        </Route>
        <Route path="/users">
          {solution.sessionid === "" ? ( <Login onLoginHandler={onLoginHandler} solution={solution} /> ) : ( <Users /> )}
        </Route>
        <Route path="/login">
          <Login onLoginHandler={onLoginHandler} solution={solution} />
        </Route>
      </Switch>
    </NavigationBar>
  );
}

export default App;
