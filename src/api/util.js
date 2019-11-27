import { Router } from 'express';

import { test } from 'helper/util'


var utilRouter = Router();

utilRouter.get('/test', (req, res) => {
    test().then(result => {
        res.send('test');
    });
});


export default utilRouter;