import React, { Component } from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = (props) => {
  const { columns, data } = props;
  return (
    <table className="table table-striped table-hover">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
