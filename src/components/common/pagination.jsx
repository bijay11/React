import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //   console.log(pagesCount);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination pull-left">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
