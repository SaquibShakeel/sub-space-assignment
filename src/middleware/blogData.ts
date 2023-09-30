import express from 'express';

const options = {
    method: 'GET',
    headers: {
      'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
    }
  };

const blogData = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const data = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', options);
        const json = await data.json();
        req.body = json;
        next();
    } catch(error) {
        console.log(error);
        return res.status(500).send('Third-party API Server Error');
    }
}

export default blogData;