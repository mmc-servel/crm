import { useTable } from "react-table";

function Table(props) {
  function onDeleteClickHandler(idValue) {
    console.log("Delete " + idValue);
  }
  function onEditClickHandler(idValue) {
    console.log("Edit " + idValue);
  }
  function onCellChangeHandler(idValue) {
    console.log("Change " + idValue);
  }

  var columns = props.columns.map((el,i)=>{ 
    var ttt = el.Cell=({ cell }) => (
    <div>
      <input type="text" value={cell.row.values[el.accessor]} onChange={onCellChangeHandler.bind(this,cell.row.values[el.accessor])}/>
    </div>
  ); 
  
  var xxx=el;
  xxx.Cell=ttt;

  return(xxx)});

  var data = props.data;

  columns.push({  
    Header: "Edit",
    accessor: "col4",
    Cell: ({ cell }) => (
      <div>
        <label onClick={onDeleteClickHandler.bind(this, cell.row.values.id)}>
          Del
        </label>
        <label onClick={onEditClickHandler.bind(this, cell.row.values.id)}>
          Edit
        </label>
      </div>
    ),
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, initialState: { hiddenColumns: ["id"] } });
    console.log(headerGroups);
  return (
    <table {...getTableProps()} style={{ border: "solid 1px black " }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  color: "black",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
