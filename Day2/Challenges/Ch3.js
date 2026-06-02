let balance = 10000;
let withdrawalAmount = 3000;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("\nWithdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("\nInsufficient Balance");}
