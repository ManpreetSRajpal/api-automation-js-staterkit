import PostsPage from "../pages/posts.page";
import should from "should";

describe('Demo api suite', function () {
    describe('GET Request', function () {
        it('Should Get Comments', async function () {

            let res = await PostsPage.getMeComments();
            res.status.should.equal(200);
        });
    });
});