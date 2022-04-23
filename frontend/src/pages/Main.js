import { Route, Switch, Redirect } from "react-router-dom";

import React, { Component } from 'react';
import classes from "./Main.module.css";
import Card from "../components/Card";
//import Table from "../comonents/table/Table";
import Table from "../components/table/Table"
//import TableMain from "../components/TableMain";

function Main(props) {
  let products=[
                {"id":"1","name":"Sergiu","age":"43","prof":"Engineer"},
                {"id":"2","name":"Lilea","age":"42","prof":"Teacher"},
                {"id":"3","name":"Victor","age":"44","prof":"House"}
              ];

  return (
    <section className={classes.main}>
      <Card>
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Search For</label>
            <input type="email" required id="title" />
          </div>

         <Table products={products}/>

        </div>
      </Card>
    </section>
  );
}

export default Main;
