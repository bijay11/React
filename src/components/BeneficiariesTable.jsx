import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Checkbox from "./common/checkbox";
class BeneficiariesTable extends Component {
  columns = [
    { key: "select", label: "Select", content: (beneficiary) => <Checkbox /> },
    {
      path: "name",
      label: "Name",
      content: (beneficiary) => (
        <Link to={`/beneficiaries/${beneficiary._id}`}>{beneficiary.name}</Link>
      ),
    },
    { path: "relationship.name", label: "Relationship" },
    { path: "level", label: "Contingency Level" },
    { path: "share", label: "Share" },
    {
      key: "action",
      label: "Action",
      content: (beneficiary) => (
        <React.Fragment>
          <Link
            to={`/beneficiaries/${beneficiary._id}`}
            className="btn btn-primary btn-sm mr-2"
          >
            Update
          </Link>
          <button
            onClick={() => this.props.onDelete(beneficiary)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </React.Fragment>
      ),
    },
  ];

  render() {
    const { beneficiaries, onDelete } = this.props;
    return <Table columns={this.columns} data={beneficiaries} />;
  }
}

export default BeneficiariesTable;
