import { Route, Switch, Redirect } from "react-router-dom";

import React, { Component } from 'react';
import classes from "./Main.module.css";
import Card from "../components/Card";
import TableMain from "../components/TableMain";

function Main(props) {
  

  return (
    <section className={classes.main}>
      <Card>
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Search For</label>
            <input type="email" required id="title" />
          </div>

          <div className={classes.control}>
            <TableMain />
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Main;
