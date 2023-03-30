import array_equals from './array_equals'
import array_approx_equals from './array_approx_equals'
import index_item_1st_occurs from './index_item_1st_occurs'
import index_item_1st_doesnt_occur from './index_item_1st_doesnt_occur'

Array.prototype.equals = function(a){
  return array_equals(this,a)
}

Array.prototype.approx_equals = function(a, tol = 0.00002){
  return array_approx_equals(this,a,tol)
}

Array.prototype.index_item_1st_occurs = function(a){
  return index_item_1st_occurs(this,a)
}

Array.prototype.index_item_1st_doesnt_occur = function(a){
  return index_item_1st_doesnt_occur(this,a)
}
