import PostsPage from '../pages/posts.page';

describe('Demo api suite', function () {
	describe('GET Request', function () {
		it('Should Get Comments', async function () {
			const res = await PostsPage.getMeComments();
			res.status.should.equal(200);
		});
	});
});
