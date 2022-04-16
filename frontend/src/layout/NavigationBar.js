import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import LogArea from "../components/LogArea";

function NavigationBar(props) {
  return (
    <div>
      <div className={classes.header_div_lv0}>
        <header className={classes.header}>
          <div className={classes.logo}>MoldMediaCard</div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Home<span>&#8595;</span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/users">
                  Users<span>&#8595;</span>{" "}
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Info<span>&#8595;</span>{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </header>
        <div className={classes.login_div}>
          <LogArea solution={props.solution}/>
        </div>
      </div>

      <div className={classes.main}>{props.children}</div>
    </div>
  );
}

export default NavigationBar;
