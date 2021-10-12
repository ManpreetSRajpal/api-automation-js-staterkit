import supertest from "supertest";

var commonHeaders = {
    'authorization': 'TokenValueASDF',
    'Accept': 'application/json',
};

exports.GET = async ({endpoint, baseUrl = "http://localhost:3000/", headers}) => {


    headers = headers != undefined
        ? {...commonHeaders, ...headers}
        : commonHeaders;

    try {
        let response = await supertest(baseUrl).get(endpoint)
            .set(headers);
        return response;
    } catch (error) {
        console.log('Error in GET request - ', error);
    }
};

exports.POST = async ({endpoint, requestBody, baseUrl = "default url",headers}) => {

    headers = headers != undefined
        ? {...commonHeaders, ...headers}
        : commonHeaders;

    try {
        let response = await supertest(baseUrl).post(endpoint)
            .set(headers)
            .send(requestBody);
        return response;
    } catch (error) {
        console.log('Error in POST Request - ', error);
    }
};