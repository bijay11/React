export const relationships = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Wife" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Son" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Daughter" },
];

export function getRelationships() {
  return relationships.filter((r) => r);
}
