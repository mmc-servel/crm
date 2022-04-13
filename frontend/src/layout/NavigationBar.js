import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";

function NavigationBar(props) {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>MoldMediaCard</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home<span>&#8595;</span> </Link>
            </li>
            <li>
              <Link to="/users">Users<span>&#8595;</span> </Link>
            </li>
            <li>
              <Link to="/login">Login<span>&#8595;</span> </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.main}>
      {props.children}
      </div>
    </div>
  );
}

export default NavigationBar;
