import TableRows from "./TableRows";
function Table(props) {
  return (
    <div>
      Table
      {props.products.map(row => <TableRows row={row}/>)}

    </div>
  );
}

export default Table;
