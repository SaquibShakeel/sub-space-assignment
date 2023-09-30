import express from 'express';
import _ from 'lodash';

export const blogStats = (req: express.Request, res: express.Response) => {
    try {
        const blogs = req.body.blogs;
        const totalPosts = _.size(blogs);
        const longestTitle = _.map(blogs, 'title').sort((a, b) => b.length - a.length)[0];
        const privateBlog = _.size(_.map(blogs, 'title').filter((title) => title.toLowerCase().includes('privacy')));
        const uniqueBlogTitles = _.uniq(_.map(blogs, 'title'));

        res.send({
            totalBlogs : totalPosts,
            longestTitle,
            blogsIncludePrivacy : privateBlog,
            uniqueBlogTitles
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}       