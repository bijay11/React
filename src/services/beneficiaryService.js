import * as relationshipsAPI from "./relationshipService";

const beneficiaries = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Jean Doe",
    relationship: { _id: "5b21ca3eeb7f6fbccd471818", name: "Wife" },
    level: "Primary(1)",
    share: "20%",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "John Doe",
    relationship: { _id: "5b21ca3eeb7f6fbccd471818", name: "Son" },
    level: "Contingent (2)",
    share: "10%",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Jean DoNotMail",
    relationship: { _id: "5b21ca3eeb7f6fbccd471820", name: "Daughter" },
    level: "Primary(1)",
    share: "30%",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "John DoNotMail",
    relationship: { _id: "5b21ca3eeb7f6fbccd471814", name: "Son" },
    level: "Primary(1)",
    share: "15%",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Johny DoNotMail",
    relationship: { _id: "5b21ca3eeb7f6fbccd471814", name: "Daughter" },
    level: "Contingent (2)",
    share: "15%",
  },
];

export function getBeneficiaries() {
  return beneficiaries;
}

export function getBeneficiary(id) {
  return beneficiaries.find((b) => b._id === id);
}

export function saveBeneficiary(beneficiary) {
  let beneInDb = beneficiaries.find((r) => r._id === beneficiary._id) || {};
  beneInDb.name = beneficiary.name;
  beneInDb.relationship = relationshipsAPI.relationships.find(
    (r) => r._id === beneficiary.relationshipId
  );

  beneInDb.level = beneficiary.level;
  beneInDb.share = beneficiary.share;

  if (!beneInDb._id) {
    beneInDb._id = Date.now().toString();
    beneficiaries.push(beneInDb);
  }
  return beneInDb;
}

export function deleteBeneficiary(id) {
  let beneInDb = beneficiaries.find((b) => b._id === id);
  beneficiaries.splice(beneficiaries.indexOf(beneInDb), 1);
  return beneInDb;
}
