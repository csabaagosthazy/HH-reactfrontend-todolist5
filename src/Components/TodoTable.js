import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const TodoTable = props => {
  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Description", accessor: "desc" },
    {
      Header: "",
      id: "delete",
      Cell: row => (
        <button onClick={() => props.handleDelete(row.index)}>Delete</button>
      )
    }
  ];

  return (
    <div>
      <div className="App">
        <ReactTable data={props.todos} columns={columns} />
      </div>
    </div>
  );
};

export default TodoTable;
