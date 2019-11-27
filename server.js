'use strict';

const express = require('express');

import { NODE } from 'constants/server';
import api from 'api';


const app = express();


app.use(express.json());

app.use('/', api);

app.listen(NODE.PORT, NODE.HOST, () => {
  console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`);
});
