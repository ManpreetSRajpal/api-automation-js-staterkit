const client = require("util/client");
const endpoints = require("util/endpoints");
import json from "../../util/jsonHelper";

let baseUrl = endpoints.baseUrl;
let postsUrl = endpoints.postsEndpoint;
let commentsUrl = endpoints.commentsEndpoint;

const PostsPage = {

    async getMePost(id) {

        var moreHeaders = {'Content-Type': 'application/json'};

        let res = await client.GET({
            baseUrl: baseUrl,
            endpoint: postsUrl,
            headers: moreHeaders
        });
        return res;
    },

    async getMeComments() {

        let beforeResp = await this.getMePost(1);
        let id = json.getValue(beforeResp.body, 'id');
        let res = await client.GET({
            endpoint: commentsUrl + id
        });
        return res;
    }
};

export default PostsPage;