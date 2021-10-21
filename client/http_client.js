const commonHeaders = {
  authorization: "TokenValueASDF",
  Accept: "application/json",
};

const GET = {
  withHeaders: async function ({ endpoint, headers }) {
    headers =
      headers != undefined ? { ...commonHeaders, ...headers } : commonHeaders;

    try {
      const response = await baseUrl.get(endpoint).set(headers);
      logger.info("GET - Response - " + JSON.stringify(response));
      return response;
    } catch (error) {
      logger.error("Error in GET request - ", error);
    }
  },

  withoutHeaders: async function ({ endpoint }) {
    try {
      const response = await baseUrl.get(endpoint);
      logger.info("GET - Response - " + JSON.stringify(response));
      return response;
    } catch (error) {
      logger.error("Error in GET request - ", error);
    }
  },
};

const POST = {
  withHeaders: async function ({ endpoint, requestBody, headers }) {
    headers =
      headers != undefined ? { ...commonHeaders, ...headers } : commonHeaders;

    try {
      const response = await baseUrl
        .post(endpoint)
        .set(headers)
        .send(requestBody);
      logger.info("POST - Response - " + JSON.stringify(response));
      return response;
    } catch (error) {
      logger.error("Error in POST Request - ", error);
    }
  },
};

export { GET, POST };
