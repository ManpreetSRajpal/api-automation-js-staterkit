import jp from "jsonpath";

exports.getValue = (json, inp) => {

    let result = jp.query(json, '$..' + inp);
    return result;
}