import express from "express";
import _ from "lodash";

const resolverArgs = (...args: any) => {
  return args[0] + args[1];
};

const search = (blogs: any, query: string) => {
  return _.filter(blogs, (blog) => {
    return blog.title.toLowerCase().includes(query.toLowerCase());
  });
};

const memoizedSearch = _.memoize(search, resolverArgs);

export const blogSearch = (req: express.Request, res: express.Response) => {
  try {
    const { blogs } = req.body;
    const { query } = req.query;

    if (!query) {
      return res.status(400).send("Bad Request");
    }

    const searchResult = memoizedSearch(blogs, query as string);
    res.send(searchResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
