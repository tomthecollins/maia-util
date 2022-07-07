'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convert_1st_bar2anacrusis_val;
function convert_1st_bar2anacrusis_val(bar_1, divisions) {
  // Tom Collins 25/2/2015.
  // In
  // bar_1 Object mandatory
  // divisions Integer mandatory
  // Out Array
  // This function works out how long an anacrusis contained in bar_1 should
  // last.

  // Get top and bottom number from time signature, to work out how long a full
  // first bar should last.
  if (bar_1.attributes) {
    var attributes = bar_1.attributes;
    for (var j = 0; j < attributes.length; j++) {
      if (attributes[j].time) {
        // Assuming there is only one time per attribute...
        var time_sig_1 = {};
        time_sig_1.topNo = parseInt(attributes[j].time[0].beats[0]);
        time_sig_1.bottomNo = parseInt(attributes[j].time[0]['beat-type'][0]);
      }
    }
  }
  if (time_sig_1 == undefined) {
    console.log('It was not possible to find a time signature in the first ' + 'bar of the top staff.');
    console.log('Returning default values for the anacrusis and crotchets ' + 'bar, which may be wrong.');
    return [0, 4];
  }

  var anacrusis = 0;
  var crotchets_per_bar = 4 * time_sig_1.topNo / time_sig_1.bottomNo;
  var dur_in_1st_bar_should_be = divisions * crotchets_per_bar;
  var ontime = 0;

  // Get backup value.
  if (bar_1.backup) {
    var backups = bar_1.backup;
  } else {
    backups = [];
  }

  // Increment over the notes.
  if (bar_1.note) {
    var notes = bar_1.note;
    for (var note_index = 0; note_index < notes.length; note_index++) {
      if (notes[note_index].grace == undefined) {
        // This is the integer duration expressed in MusicXML.
        var duration = parseInt(notes[note_index].duration[0]);
        var offtime = ontime + duration;
        // Correct rounding errors in the offtime values.
        // If the note is a second, third, etc. note of a chord, then do
        // not increment the ontime variable.
        if (note_index < notes.length - 1 && notes[note_index + 1].chord) {} else {
          // Do increment the ontime value.
          ontime = offtime;
        }
      }
    }
  }
  var compar = ontime / (backups.length + 1);
  if (compar != dur_in_1st_bar_should_be) {
    anacrusis = -compar / divisions;
  }
  return [anacrusis, crotchets_per_bar];
}