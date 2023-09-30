import express from 'express';

import blogStats from './blogStats';
import blogSearch from './blogSearch';

const router = express.Router();

export default (): express.Router => {
    blogStats(router);
    blogSearch(router);

    return router;
};