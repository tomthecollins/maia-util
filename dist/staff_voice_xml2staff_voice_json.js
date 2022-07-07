"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staff_voice_xml2staff_voice_json;
function staff_voice_xml2staff_voice_json(voice_no_from_xml, staff_nos_for_this_id, part_idx) {
  // Tom Collins 22/2/2015.
  // In
  // voice_no_from_xml Integer mandatory
  // staff_nos_for_this_id Array mandatory
  // part_idx Integer mandatory
  // Out Array
  // This function converts MusicXML 2.0 voice assignments, which can go beyond
  // 1-4 into 5-8 in order to encode multiple staves within the same part, to
  // json_score voice assignments, which use staff number to encode multiple
  // staves within the same part separately, and a voice number always in the
  // range 0-3.

  if (voice_no_from_xml !== undefined) {
    // There is a maximum of four voices per staff. In MusicXML 2.0, voices 5-8
    // are used to encode a second staff in the same part. In a json_score
    // these will have separate staff numbers, and this is handled here. The
    // convention of using voices 5-8 to encode a second staff in the same part
    // is not adhered to by hum2xml.
    var staff_idx = Math.floor((voice_no_from_xml - 1) / 4);
    var staffNo = staff_nos_for_this_id[staff_idx];
    var voiceNo = voice_no_from_xml % 4 - 1;
  } else {
    var staffNo = part_idx;
    var voiceNo = 0;
  }
  return [staffNo, voiceNo];
}