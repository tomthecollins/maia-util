"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copy_to_clipboard;
/**
 * This function calculates the sample standard deviation of an input array.
 *
 * @author Tom Collins
 * @comment 13th April 2020
 * @param {number|booelan[]} arr - An array.
 * @param {string|number|booelan[]} [cdf] - An array.
 * @return {(string|number|booelan)} An element from `arr`.
 *
 * @example
 *     copy_to_clipboard("Hi there!")
 * →
 * (Copies the text "Hi there!" to the clipboard.)
 */
function copy_to_clipboard(copyText, alertText) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value = copyText;
  dummy.select();
  dummy.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(dummy);
  if (alertText == undefined) {
    alert("Link copied to clipboard:\n" + copyText);
  } else {
    alert(alertText);
  }
}