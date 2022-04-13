import Card from "../components/Card";
import classes from "./Login.module.css";

function Login(props) {
  return (
    <section className={classes.main}> 
      <Card >
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Username</label>
            <input type="email" required id="title" />
          </div>

          <div className={classes.control}>
            <label htmlFor="image">Password</label>
            <input type="password" required id="image" />
          </div>

          <div className={classes.control}>
            <label htmlFor="description">Notes</label>
            <textarea id="description" rows="3" />
          </div>
          <div className={classes.actions}>
            <button onClick={props.onLoginHandler}>Add</button>
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
