'use strict';
const rp = require('request-promise-native');

// This function will be called by the platform to verify credentials
module.exports = function verifyCredentials(cfg) {
    console.log('Credentials passed for verification %j', cfg);
    return rp({
        uri: `https://${cfg.baseURL}/api/v1/users`,
        qs: {
            token: cfg.token,
            page: 1
        },
        json: true
    });
};
