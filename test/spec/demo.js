import Posts_service from "../../service/posts/posts_service";

describe("Demo api suite", function () {
  describe("GET Request", function () {
    it("Should Get Comments", async function () {
      const res = await Posts_service.getMeComments();
      res.status.should.equal(200);
    });
  });
});
