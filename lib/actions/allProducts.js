/*eslint no-console: 0 no-invalid-this: 0*/
'use strict';
const rp = require('request-promise-native');
const messages = require('elasticio-node').messages;

/**
 * This method will be called from elastic.io platform providing following data
 *
 * @param msg incoming message object that contains ``body`` with payload
 * @param cfg configuration that is account information and configuration field values
 * @param snapshot - current values from the snapshot
 */
function processAction(msg, cfg) {
    console.log('Action started');
    const that = this;
    return rp({
        uri: `https://${cfg.baseURL}/api/v1/products`,
        qs: {
            token: cfg.token
        },
        json: true
    }).then((result) => {
        console.log(result);
        result.products.map((product) => that.emit('data', messages.newMessageWithBody(product)));
    });
}

module.exports.process = processAction;
