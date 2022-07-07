'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get_parameter_by_name;
/**
 * This function will return a string referring to a parameter value in the page
 * URL, given the parameter name as its only argument.
 *
 * @author Tom Collins
 * @comment 13th April 2020
 * @param {string} name - Referring to a parameter name in the page URL.
 * @return {string} Referring to the corresponding parameter value in the page
 * URL.
 *
 * @example
 *     Assuming a URL of https://something.com/index.html?r=0,3,0&c=0,2,3
 *     get_parameter_by_name("r")
 * →
 * "0,3,0"
 */
function get_parameter_by_name(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}