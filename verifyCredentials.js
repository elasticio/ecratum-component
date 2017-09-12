'use strict';
const r2 = require('r2');

// This function will be called by the platform to verify credentials
module.exports = function verifyCredentials(credentials) {
    console.log('Credentials passed for verification %j', credentials);
    return r2(`https://${credentials.baseURL}/api/v1/users?token=${credentials.token}&page=1`);
};
