import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {
  getBeneficiary,
  saveBeneficiary,
} from "./../services/beneficiaryService";
import { getRelationships } from "../services/relationshipService";

class BeneficiaryInfo extends Component {
  state = {
    data: {
      name: "",
      relationshipId: "",
      level: "",
      share: "",
    },
    relationships: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    relationshipId: Joi.string().required(),
    level: Joi.string().required().label("Level"),
    share: Joi.string().required().min(0).max(100).label("Share"),
  };
  componentDidMount() {
    const relationships = getRelationships();
    this.setState({ relationships });

    const beneficiaryId = this.props.match.params.id;
    if (beneficiaryId === "new") return;
    if (beneficiaryId === "details") return;

    const beneficiary = getBeneficiary(beneficiaryId);
    if (!beneficiary) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(beneficiary) });
  }
  mapToViewModel(beneficiary) {
    return {
      _id: beneficiary._id,
      name: beneficiary.name,
      relationshipId: beneficiary.relationship._id,
      level: beneficiary.level,
      share: beneficiary.share,
    };
  }
  doSubmit = () => {
    saveBeneficiary(this.state.data);
    this.props.history.push("/beneficiaries");
  };
}

export default BeneficiaryInfo;
