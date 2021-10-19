import jsonPath from "jsonpath";

exports.getValue = (json, inp) => {
  const result = jsonPath.query(json, "$.." + inp);
  return result;
};

exports.setVal = (json, inp, val) => {
  jsonPath.value(json, "$.." + inp, val);
  return json;
};
