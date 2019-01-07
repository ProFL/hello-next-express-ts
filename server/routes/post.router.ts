import { Router } from 'express';
import app from '../next.config';

const router = Router();

router.get('/:id', (req: any, res: any) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
});

export default router;
