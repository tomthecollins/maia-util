'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find_segment_against_template;

var _score_segment_against_template = require('./score_segment_against_template');

var _score_segment_against_template2 = _interopRequireDefault(_score_segment_against_template);

var _max_argmax = require('./max_argmax');

var _max_argmax2 = _interopRequireDefault(_max_argmax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function find_segment_against_template(segment, template_set) {
  // Tom Collins 26/10/2011.
  // In
  // segment Array mandatory
  // template_set Array mandatory
  // This function returns the chord template to which the input segment is
  // best matched, according to Pardo and Birmingham's (2002) scoring function.
  var d = template_set.length;
  var storage = new Array(d);
  for (var _k = 0; _k < d; _k++) {
    storage[_k] = (0, _score_segment_against_template2.default)(segment, template_set[_k]);
  }
  var mam = (0, _max_argmax2.default)(storage);
  var k = mam[1];
  return { "score": storage[k], "index": k, "vector": template_set[k] };
  //return(outtemplate);
}