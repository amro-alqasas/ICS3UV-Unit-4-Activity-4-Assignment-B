/**
 * @author Amro Alqasas
 * @version 1.0.0
 * @date 2025-12-11
 * @fileoverview This program keeps track of car stats.
 */

// Car variables
let odometer = 65000;      // km on car
let lastOilChange = 65000; // km when oil was last changed
let carColor = "Red";      // color of car
let gasCosts = [74.00];    // list of gas fill-up costs

// Show car info
function showCarInfo() {
  console.log(`Car Color: ${carColor}`);
  console.log(`Odometer: ${odometer} km`);
  console.log(`Last oil change at: ${lastOilChange} km`);
}

// Check if car needs oil change
function checkOilChange() {
  if (odometer - lastOilChange >= 5000) {
    lastOilChange = odometer;
    console.log("Oil changed!");
    return true;
  }
  console.log("No oil change needed.");
  return false;
}

// Drive the car
function driveCar() {
  const km = Math.floor(Math.random() * 901) + 100;
  odometer += km;
  console.log(`Drove ${km} km. Total: ${odometer} km`);
  return km;
}

// Add gas fill-up cost
function addGasCost(cost: number) {
  gasCosts.push(cost);
  console.log(`Added gas cost: $${cost}`);
}

// Show gas costs
function showGasCosts() {
  console.log("\nGas Costs:");
  let total = 0;
  for (let i = 0; i < gasCosts.length; i++) {
    console.log(`Fill-up ${i + 1}: $${gasCosts[i]}`);
    total += gasCosts[i];
  }
  const average = total / gasCosts.length;
  console.log(`Average: $${average.toFixed(2)}`);
  return average;
}

// Change car color
function changeColor(newColor: string) {
  carColor = newColor;
  console.log(`Car color changed to: ${carColor}`);
}

// Main program
console.log("=== MY CAR PROGRAM ===\n");

console.log("Starting car info:");
showCarInfo();

console.log("\n--- Driving ---");
driveCar();
driveCar();

console.log("\n--- Check oil ---");
checkOilChange();

console.log("\n--- More driving ---");
driveCar();
driveCar();

console.log("\n--- Add gas costs ---");
addGasCost(68.50);
addGasCost(72.25);

console.log("\n--- Change color ---");
changeColor("Blue");

console.log("\n--- Check oil again ---");
checkOilChange();

console.log("\n--- Gas history ---");
showGasCosts();

console.log("\n=== Final car info ===");
showCarInfo();

console.log("\nDone.");
