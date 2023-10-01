import express from "express";
import _ from "lodash";

const statusResponse = (blogs: any) => {
  return {
    totalBlogs: _.size(blogs),
    longestTitle: _.map(blogs, "title").sort((a, b) => b.length - a.length)[0],
    blogsIncludePrivacy: _.size(
      _.map(blogs, "title").filter((title) =>
        title.toLowerCase().includes("privacy")
      )
    ),
    uniqueBlogTitles: _.uniq(_.map(blogs, "title")),
  };
};

const memoizedStatusResponse = _.memoize(statusResponse);

export const blogStats = (req: express.Request, res: express.Response) => {
  try {
    const { blogs } = req.body;
    const status = memoizedStatusResponse(blogs);
    res.send(status);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
