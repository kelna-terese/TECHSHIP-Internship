let unitsConsumed = 250;
let costPerUnit = 8;
let fixedCharge = 150;

let electricityCharge =
    unitsConsumed * costPerUnit;

let totalBill =
    electricityCharge + fixedCharge;

console.log("\nElectricity Bill");
console.log("Units Consumed:", unitsConsumed);
console.log("Cost per Unit: ₹" + costPerUnit);
console.log("Electricity Charge: ₹" + electricityCharge);
console.log("Fixed Charge: ₹" + fixedCharge);
console.log("Total Bill: ₹" + totalBill);