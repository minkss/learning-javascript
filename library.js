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

//Van.prototype = Car.prototype;   if so,when u add new method 
//to Van,Car will add that method too,and vice versa.

//Van.prototype = new Car();      very common,but bad practice.

//the good practice
Van.prototype = Object.create(Car.prototype);
