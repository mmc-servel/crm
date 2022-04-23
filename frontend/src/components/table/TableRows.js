import TableRowsCell from "./TableRowsCell"

function TableRows(props) {

  return (<div>
    Row
    <TableRowsCell cell = {props.row.id} />
    <TableRowsCell cell = {props.row.name} />
    <TableRowsCell cell = {props.row.age} />
    <TableRowsCell cell = {props.row.prof} />
  </div>
  );
}

export default TableRows;
