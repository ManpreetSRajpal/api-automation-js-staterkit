import client from "client/http_client";
import { postPageEndpoints } from "./endpoints.js";
import json from "util/json_parser";

const postsUrl = postPageEndpoints.postsEndpoint;
const commentsUrl = postPageEndpoints.commentsEndpoint;

const Posts_service = {
  async getMePost() {
    logger.info(" Getting Posts");
    const moreHeaders = { "Content-Type": "application/json" };
    const res = client.GET({
      endpoint: postsUrl,
      headers: moreHeaders,
    });
    return res;
  },

  async getMeComments() {
    logger.info(" Getting comments ");
    const beforeResp = await this.getMePost(1);
    const id = json.getValue(beforeResp.body, "id");
    const res = client.GET({
      endpoint: commentsUrl + id,
    });
    return res;
  },
};

export default Posts_service;
