import classes from './Table.module.css';
import TableRows from "./TableRows";

function Table(props) {
  let tabHeader={"price":"Price","name":"Name","description":"Desc"}
  return (
    <div className={classes.prod_table}>
      <TableRows row={tabHeader} isHeader="Y"/>
      {props.products.map(row => <TableRows row={row} getProductsRequest={props.getProductsRequest}/>)}

    </div>
  );
}

export default Table;
