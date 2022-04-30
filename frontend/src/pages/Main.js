import { Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import React, { Component } from 'react';
import classes from "./Main.module.css";
import Card from "../components/Card";
//import Table from "../comonents/table/Table";
import Table from "../components/table/Table"
//import TableMain from "../components/TableMain";

function Main(props) {
  const [dummy, setDummy] = useState("");
  props.solution.updatemain=setDummy;

  return (
    <section className={classes.main}>
      <Card>
        <div className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Search For</label>
            <input type="email" required id="title" />
          </div>

         {props.solution.products!=null?<Table products={props.solution.products} getProductsRequest={props.getProductsRequest} getProductsRequest={props.getProductsRequest}/>:null}

        </div>
      </Card>
    </section>
  );
}

export default Main;
