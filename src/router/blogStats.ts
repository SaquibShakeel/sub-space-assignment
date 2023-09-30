import express from 'express';

import { blogStats } from '../controllers/blogStats';
import blogData from '../middleware/blogData';

export default (router: express.Router) => {
    router.get('/blog-stats', blogData, blogStats);
}