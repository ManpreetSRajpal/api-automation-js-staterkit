import jp from "jsonpath";

exports.getValue = (json, inp) => {

    let result = jp.query(json, '$..' + inp);
    return result;
}

exports.setVal = (json, inp, val) => {
    jp.value(json, '$..' + inp, val);
    return json;
}