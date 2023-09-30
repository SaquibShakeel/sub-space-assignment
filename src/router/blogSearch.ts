import express from 'express';

import { blogSearch } from '../controllers/blogSearch';
import blogData from '../middleware/blogData';

export default (router: express.Router) => {
    router.get('/blog-search', blogData, blogSearch);
}