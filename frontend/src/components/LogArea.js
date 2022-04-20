import { Link } from "react-router-dom";
import {useState} from 'react';
import classes from "./LogArea.module.css";

function LogArea(props) {

  const [email,setEmail] = useState('');
  props.solution.onLogAreaRefresh=setEmail;
  props.solution.username=email; //TO DO: why it doesn't work without this?
  console.log("propsUser",props.solution.username);

  return (
    <div className={classes.internal_login_div}>
      <Link className={classes.log_line} to="/login"> {props.solution.username}</Link>
      <Link to="/login"> MyBacket (0)</Link>
    </div>
  );
}

export default LogArea;
