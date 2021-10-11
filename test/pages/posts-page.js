const client = require("util/client");
const endpoints = require("util/endpoints");

let baseUrl = endpoints.baseUrl;
let postsUrl = endpoints.postsEndpoint;
let commentsUrl = endpoints.commentsEndpoint;

const PostPage = {

    async getMePost(id) {
        let res = await client.GET({
            baseUrl: baseUrl,
            endpoint: postsUrl + id
        });
        return res;
    },

    async getMeComments() {
        let beforeResp = await this.getMePost(1);
        let id = beforeResp.body.id;
        let res = await client.GET({
            endpoint: commentsUrl + id
        });
        return res;
    }
};

export default  PostPage;