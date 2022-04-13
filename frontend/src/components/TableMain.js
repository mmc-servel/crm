import Table from "./Table";

function TableMain() {
  const data = [
    {
      id:"1",
      col1: "Minsk",
      col2: "27",
      col3: "rain",
    },
    {
      id:"2",
      col1: "Vilnius",
      col2: "30",
      col3: "cold",
    },
    {
      id:"3",
      col1: "London",
      col2: "23",
      col3: "rain",
    },
  ];
  var columns = [
    {
      Header: "Id",
      accessor: "id", // accessor is the "key" in the data
    },
    {
      Header: "City",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Temperature",
      accessor: "col2",
    },
    {
      Header: "Weather Forecast",
      accessor: "col3", 
      
    },
  ];
  return <Table data={data} columns={columns}/>;
}

export default TableMain;