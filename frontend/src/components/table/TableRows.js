import classes from './TableRows.module.css';
import TableRowsCell from "./TableRowsCell"
import TableRowsCellControl from "./TableRowsCellControl"

function TableRows(props) {

  function onDeleteHandler(product_id){
    alert(product_id);
  }

  return (<div className={classes.prod_tablerow}>

    <TableRowsCell cell = {props.row.price} width="70px" isHeader={props.isHeader} />
    <TableRowsCell cell = {props.row.name}  width="140px" isHeader={props.isHeader}/>
    <TableRowsCell cell = {props.row.description} width="240px" isHeader={props.isHeader}/>

    {props.isHeader==="Y"? null : <TableRowsCellControl onDeleteHandler={onDeleteHandler} product_id = {props.row.product_id}  getProductsRequest={props.getProductsRequest}/>}

  </div>
  );
}

export default TableRows;
