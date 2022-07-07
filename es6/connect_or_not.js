export default function connect_or_not(singlescore, doublescore){
  // Tom Collins 26/10/2011.
  // In
  // singlescore Array mandatory
  // doublescore Integer mandatory
  // Out Boolean
  // This is how Pardo and Birmingham (2002) decide whether to unite two
  // previously separate segments.
  var connected = 0;
  if (doublescore >= singlescore[0] + singlescore[1]){
    connected = 1;
  }
  return connected;
}
