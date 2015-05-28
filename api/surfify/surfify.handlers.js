'use strict';

var mswRequest = require('../lib/msw/msw.requester');

exports.getSurfForecast = function *() {

    let queries = this.request.query;

    let spotId = parseInt(queries.spotid);
    let start = parseInt(queries.start);
    let end = parseInt(queries.end);
    let maxWind = queries.maxwind || 50;
    let minSwell = queries.minswell || 0;

    this.body = yield mswRequest.makeRequest(spotId, maxWind, minSwell, start, end);

};
