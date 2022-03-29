'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').map(i => (
    i.split(':'))).map(x => x.map(i => (
    i.trim()))).filter(x => x.length > 1).reduce((prev, [prop, val]) => ({
    ...prev, [prop]: val,
  }), {});
}

module.exports = convertToObject;
