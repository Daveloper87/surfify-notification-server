'use strict';

const surfifyRoutes = require('../surfify/surfify.router');
const statusRoutes = require('../status/status.router');
const authMiddleware = require('../middleware/auth.middleware');
const headersMiddleware = require('../middleware/response.headers');

module.exports = function (app) {

    //** MIDDLEWARE **//
    app.use(authMiddleware.verifyApiKey);
    app.use(headersMiddleware.cache);

    //** ROUTES **//
    app.use(surfifyRoutes.routes());
    app.use(statusRoutes.routes());

};

