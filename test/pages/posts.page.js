import client from 'util/client';
import { postPageEndpoints } from './endpoints.js';
import json from 'util/jsonHelper';

const postsUrl = postPageEndpoints.postsEndpoint;
const commentsUrl = postPageEndpoints.commentsEndpoint;

const PostsPage = {
	...client,

	async getMePost() {
		logger.info(' Getting Posts');
		const moreHeaders = { 'Content-Type': 'application/json' };
		const res = this.GET({
			endpoint: postsUrl,
			headers: moreHeaders,
		});
		return res;
	},

	async getMeComments() {
		logger.info(' Getting comments ');
		const beforeResp = await this.getMePost(1);
		const id = json.getValue(beforeResp.body, 'id');
		const res = this.GET({
			endpoint: commentsUrl + id,
		});
		return res;
	},
};

export default PostsPage;
