import server from './express.config';
import app from './next.config';

const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        server.get('*', (req: any, res: any) => handle(req, res));

        const port = process.env.PORT || 8080;
        server.listen(port, (err: any) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex: { stack: any; }) => {
        console.error(ex.stack);
        process.exit(1);
    })
