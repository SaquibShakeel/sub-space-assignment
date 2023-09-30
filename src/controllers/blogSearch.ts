import express from "express";
import _ from "lodash";

export const blogSearch = (req: express.Request, res: express.Response) => {
    try {
        const blogs = req.body.blogs;
        const { query } = req.query;

        const searchResults = _.filter(blogs, (blog) => {
            return blog.title.toLowerCase().includes(query.toString().toLowerCase());
        });

        res.send({
            searchResults,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}