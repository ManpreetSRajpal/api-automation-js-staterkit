import supertest from "supertest";

var commonHeaders = {
    'authorization': 'TokenValueASDF',
    'Accept': 'application/json',
};

exports.GET = async ({endpoint, baseUrl = "http://localhost:3000/", headers = commonHeaders}) => {

    try {
        let response = await supertest(baseUrl).get(endpoint)
            .set(commonHeaders)
            .set(headers);
        return response;
    } catch (error) {
        console.log('Error in GET request - ', error);
    }
};

exports.POST = async (endpoint, requestBody,baseUrl="default url") => {
    try {
        let response = await supertest(baseUrl).post(endpoint)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody);
        return response;
    } catch (error) {
        console.log('Error in POST Request - ', error);
    }
};