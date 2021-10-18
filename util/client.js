const commonHeaders = {
    'authorization': 'TokenValueASDF',
    'Accept': 'application/json',
};

exports.GET = async ({endpoint, headers}) => {

    headers = headers != undefined
        ? {...commonHeaders, ...headers}
        : commonHeaders;

    try {
        const response = await baseUrl.get(endpoint)
            .set(headers);
        logger.info("Get call Response " + JSON.stringify(response));
        return response;
    } catch (error) {
        logger.error('Error in GET request - ', error);
    }
};

exports.POST = async ({endpoint, requestBody, headers}) => {

    headers = headers != undefined
        ? {...commonHeaders, ...headers}
        : commonHeaders;

    try {
        const response = await baseUrl.post(endpoint)
            .set(headers)
            .send(requestBody);
        logger.info("Post call Response " + JSON.stringify(response));
        return response;
    } catch (error) {
        logger.error('Error in POST Request - ', error);
    }
};