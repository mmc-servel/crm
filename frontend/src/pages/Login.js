import {useState} from 'react';
import Card from "../components/Card";
import classes from "./Login.module.css";

function Login(props) {

  //const [username,setUsername] = useState('');

  const onUsernameChangeHandler=(event)=>{
    props.solution.username = event.target.value;
    //setUsername(event.target.value);
  };

  //const [password,setPassword] = useState('');

  const onPasswordChangeHandler=(event)=>{
    props.solution.password = event.target.value;
    //setPassword(event.target.value);
  };

  const onLocalLoginHander=(event)=>{
    //var loginDetail={username:username,password:password};
    //let loginDetail={...props.solution};
    //console.log("logDet",loginDetail);
    props.onLoginHandler();
  }

  return (
    <section className={classes.main}> 
      <Card >
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Username</label>
            <input type="email" required id="title" onChange={onUsernameChangeHandler}/>
          </div>

          <div className={classes.control}>
            <label htmlFor="image">Password</label>
            <input type="password" required id="password" onChange={onPasswordChangeHandler}/>
          </div>

          <div className={classes.control}>
            <label htmlFor="description">Notes</label>
            <textarea id="description" rows="3" />
          </div>
          <div className={classes.actions}>
            <button onClick={onLocalLoginHander}>Login</button>
            <div className={classes.passoption}>
              <div>Create new user</div>
              <div>Forgot password?</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Login;
