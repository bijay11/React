import React, { Component } from "react";
import { getBeneficiaries } from "./../services/beneficiaryService";

import Pagination from "./common/pagination";
import { paginate } from "./../utils/paginate";
import BeneficiariesTable from "./BeneficiariesTable";
import { Link } from "react-router-dom";
class Beneficiaries extends Component {
  state = {
    beneficiaries: getBeneficiaries(),
    pageSize: 4,
    currentPage: 1,
  };

  //Do not update the state directly. Instead call set state method

  handleDelete = (beneficiary) => {
    const beneficiaries = this.state.beneficiaries.filter(
      (b) => b._id !== beneficiary._id
    );
    this.setState({ beneficiaries });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    // console.log(page);
  };
  render() {
    const { length: count } = this.state.beneficiaries;
    const {
      pageSize,
      currentPage,
      beneficiaries: allBeneficiaries,
    } = this.state;
    if (count === 0)
      return (
        <div className="alert alert-warning" role="alert">
          You dont have any beneficiary.
        </div>
      );
    const beneficiaries = paginate(allBeneficiaries, currentPage, pageSize);

    return (
      <React.Fragment>
        <div class="card secure-panel-trs">
          <div class="card-body">
            <h4 className="custom-panel-heading">
              <strong>
                <i className="fa fa-users"></i> Beneficiary
              </strong>
            </h4>
            <div className="bar"></div>
            <div className="alert alert-primary" role="alert">
              You have <strong>{count} </strong>Beneficiary.
            </div>

            <BeneficiariesTable
              beneficiaries={beneficiaries}
              onDelete={this.handleDelete}
            />
            <div className="text-right">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
              <Link className="btn btn-primary mr-2" to="/beneficiaries/new">
                Add New Beneficiary
              </Link>
              <Link className="btn btn-primary" to="/beneficiaries/details">
                Details
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Beneficiaries;
