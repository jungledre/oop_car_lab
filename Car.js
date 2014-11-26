function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
    this.previousOwners.push(this.owner);
    this.owner = newOwner
};

Car.prototype.paint = function(newColor){
    this.color = newColor
};

Car.prototype.start = function(newStart){
    this.running = true;
}

Car.prototype.off = function(newOff){
    this.running = false;
}

Car.prototype.driveTo = function(destination){
    if  (this.running === true){
        console.log("driving to " + destination)
        return true
    }
    else{
        return false
    }
}

Car.prototype.park = function(){
    if (this.running === false){
        console.log("parked!!")
        return true
    }
    else{
        return false
    }
}

Car.prototype.pickUp = function(name){
    if (this.running === true && this.seats > this.passengers.length + 1) {
       console.log("driving to pick up " + name)
       this.passengers.push(name);
       return true;
    }
    else {
        return false;
    }
}

Car.prototype.dropOff = function(name){
    var person = this.passengers.indexOf(name)
    if (person != -1 && this.running === true){
        this.passengers.splice(person, 1)
        console.log("driving to drop off" + name)
        return true
    }
    else {
        return false
    }
}

Car.prototype.passengerCount = function(){
    return this.passengers.length
}

// Car.pickUp() should take a name and console.log that you are "driving to 'pick up <friend>'", but only if the car is running AND there are enough seats available. It should also update the passengers array to include the new passenger. It should also return true on success and false on failure. Newly picked up passengers should be pushed to the end of the array.







// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
