const express = require('express');
const routes = require('./routes');
const app = express();
const CookieParser = require('cookie-parser');

const cors = require('cors');
app.use(cors());
app.options('*', cors);

require('./database');

app.use(express.json());
app.use(routes);
app.use(CookieParser());

app.listen(3333);
