import {useState} from 'react';
import Card from "../components/Card";
import classes from "./Login.module.css";

function Login(props) {

  const [email,setEmail] = useState('');
  
  const onEmailChangeHandler=(event)=>{
    setEmail(event.target.value);
  };

  const onLocalLoginHander=(event)=>{
    var loginDetail={username:email};
    props.onLoginHandler(loginDetail);
  }

  return (
    <section className={classes.main}> 
      <Card >
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Username</label>
            <input type="email" required id="title" onChange={onEmailChangeHandler}/>
          </div>

          <div className={classes.control}>
            <label htmlFor="image">Password</label>
            <input type="password" required id="password" />
          </div>

          <div className={classes.control}>
            <label htmlFor="description">Notes</label>
            <textarea id="description" rows="3" />
          </div>
          <div className={classes.actions}>
            <button onClick={onLocalLoginHander}>Add</button>
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
