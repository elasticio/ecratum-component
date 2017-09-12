/*eslint no-console: 0 no-invalid-this: 0*/
'use strict';
const r2 = require('r2');
const { messages } = require('elasticio-node');

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
    return r2(`https://${cfg.baseURL}/api/v1/users?token=${cfg.token}`).json.then((result) => {
        result.products.map((product) => that.emit('data', messages.newMessageWithBody(product)));
    });
}

module.exports.process = processAction;
