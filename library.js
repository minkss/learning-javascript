var Car = function(loc){
  //this = Object.create(Car.prototype);
  this.loc = loc;
  //return this;
}

Car.prototype.move = function(){
  this.loc++;
}

var Van = function(loc){
  //this = Object.create(Van.prototype);
  Car.call(this,loc);
  //return this;
}
