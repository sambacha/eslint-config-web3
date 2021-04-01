/**
 * @file eslintrc.js
 * @summary web3 eslint configuration
 * @version 1.0.0
 * @license MIT
 */
'use strict';

const eslintrc = require('./.eslintrc');

module.exports = {
  extends: [require.resolve('./core'), require.resolve('./plugins/react')],
};
/** @exports eslintrc **/
