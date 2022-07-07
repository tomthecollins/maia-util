// File conversion.
export default function comp_obj2note_point_set(comp_obj){
  // Tom Collins 2/2/2015.
  // In
  // comp_obj Object mandatory
  // Out Array
  // This function iterates over the notes property of a Composition object,
  // and converts the objects found there into a point-set format, with
  // so-called columns for ontime, MNN, MPN, duration, staff number, and
  // velocity in [0, 1].

  var notes = comp_obj.notes;
  var out_array = [];
  for (let inote = 0; inote < notes.length; inote++){
    var note = [
      notes[inote].ontime,
      notes[inote].MNN,
      notes[inote].MPN,
      notes[inote].duration,
      notes[inote].staffNo
    ];
    if (notes[inote].tonejs !== undefined && notes[inote].tonejs.volume !== undefined) {
      note.push(notes[inote].tonejs.volume)
    }
    else if (notes[inote].velocity !== undefined){
      note.push(notes[inote].velocity)
    }
    else {
      note.push(.8)
    }
    out_array.push(note)
  }
  return out_array
}
