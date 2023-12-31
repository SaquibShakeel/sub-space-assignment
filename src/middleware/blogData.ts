import express from "express";
import _ from "lodash";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "x-hasura-admin-secret":
      "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
  },
};

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const memoizedFetchData = _.memoize(fetchData);

const blogData = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const data = await memoizedFetchData();
  if (data) {
    req.body = data;
  } else {
    return res.status(500).send("Third-party API Server Error");
  }
  next();
};

export default blogData;
