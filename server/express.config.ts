import * as express from 'express';
import postRoutes from './routes/post.router';

const server = express();

server.use('/p', postRoutes);

export default server;
