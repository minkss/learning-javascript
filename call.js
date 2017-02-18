var product = function(b){
    return this * b;
}

var double = function(){
  return product.call(this,3);
}

console.log(double.call(3));
