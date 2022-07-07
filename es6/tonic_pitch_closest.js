import mean from './mean'
import min_argmin from './min_argmin'
import pitch_and_octave2midi_note_morphetic_pair from './pitch_and_octave2midi_note_morphetic_pair'


export default function tonic_pitch_closest(points, key_name){
  // Tom Collins 22/1/2016.
  // In
  // points Array mandatory
  // key_name String mandatory
  // Out Array
  // This function returns the MIDI note and morphetic pitch numbers of the tonic
  // pitch that is closest to the mean of the input point set, whose key
  // (estimate) is specified as the second input argument.

  // Get the pitch class.
  var pitch_class = key_name.split(" ")[0];
  // Create an array of MNN-MPN pairs for this pitch class across the octaves.
  var min_idx = 1;
  if (pitch_class == "A" || pitch_class == "Bb" || pitch_class == "B"){
    min_idx = 0;
  }
  var max_idx = 7;
  if (pitch_class == "C"){
    max_idx = 8;
  }
  var MNN_MPNs = [];
  for (let i = min_idx; i <= max_idx; i++){
    var curr_pitch = pitch_class + i.toString();
    MNN_MPNs.push(pitch_and_octave2midi_note_morphetic_pair(curr_pitch));
  }

  var mu = mean(points.map(function(a){
    return a[1];
  }));
  var mnn_mu = MNN_MPNs.map(function(a){
    return Math.abs(a[0] - mu);
  });
  min_idx = min_argmin(mnn_mu);
  return MNN_MPNs[min_idx[1]];
}
