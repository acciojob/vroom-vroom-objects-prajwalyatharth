// Complete the js code
function Car(make, model) {
	    return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	    // Call the Car constructor with the current context and arguments
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
