const express = require('express')

import baseRouter from 'api/base';
import utilRouter from 'api/util';


const api = express();

api.use('/', baseRouter);
api.use('/util', utilRouter);


export default api;
