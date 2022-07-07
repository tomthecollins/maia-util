import array_equals from './array_equals'
import index_item_1st_occurs from './index_item_1st_occurs'
import index_item_1st_doesnt_occur from './index_item_1st_doesnt_occur'

Array.prototype.equals = function(a){
  return array_equals(this,a)
}

Array.prototype.index_item_1st_occurs = function(a){
  return index_item_1st_occurs(this,a)
}

Array.prototype.index_item_1st_doesnt_occur = function(a){
  return index_item_1st_doesnt_occur(this,a)
}
