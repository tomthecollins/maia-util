
export default function resolve_expressions(expressions){
  // Tom Collins 28/2/2015
  // In
  // expressions Array mandatory
  // Out Array
  // When crescendos and diminuendos are expressed as lines (hairpins, wedges),
  // they have a stopping point as well as a starting point. This function
  // locates wedges stops corresponding to wedge starts, and unites the two
  // pieces of information in one array object.

  // Remove all stop wedges from the expressions array.
  var wedge_stops = [];
  var i = expressions.length - 1;
  while (i >= 0){
    if (expressions[i].type.wedge && expressions[i].type.wedge == "stop"){
      wedge_stops.push(expressions[i]);
      expressions.splice(i, 1);
    }
    i--;
  }
  // Loop over the expressions array and associate each wedge with a member of
  // wedge_stops.
  let target_idx
  for (let j = 0; j < expressions.length; j++){
    if (expressions[j].type.wedge){
      // Find the target index in wedge_stops.
      target_idx = -1;
      var k = 0;
      while (k < wedge_stops.length){
        if (wedge_stops[k].staffNo == expressions[j].staffNo &&
            wedge_stops[k].placement == expressions[j].placement &&
            wedge_stops[k].ontime >= expressions[j].ontime){
          // We found it!
          target_idx = k;
          k = wedge_stops.length - 1;
        }
        k++;
      }
      if (target_idx >= 0){
        // Add some properties to expressions[j].
        expressions[j].barOff = wedge_stops[target_idx].barOn;
        expressions[j].beatOff = wedge_stops[target_idx].beatOn;
        expressions[j].offtime = wedge_stops[target_idx].ontime;
      }
      else{
        console.log('Could not find a stop for wedge: ', expressions[j]);
      }
    }
  }
  return expressions;
}
