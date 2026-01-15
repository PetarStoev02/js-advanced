/*
  Day 5 - Closures & Scope
  Exercise: Private Variables (Bank Account)
  
  Create a `createBankAccount` function that returns an object representing
  a bank account with truly private balance.
  
  Methods required:
  - deposit(amount): adds money, returns new balance
  - withdraw(amount): removes money if sufficient funds, returns new balance or error message
  - getBalance(): returns current balance
  - getTransactionHistory(): returns array of all transactions
  
  Rules:
  - Balance must be private (not accessible via account.balance)
  - Cannot withdraw more than current balance
  - Cannot deposit or withdraw negative amounts
  - Each transaction should be logged with timestamp
  
  Example:
    const account = createBankAccount(1000);
    console.log(account.getBalance());     // 1000
    console.log(account.deposit(500));     // 1500
    console.log(account.withdraw(200));    // 1300
    console.log(account.withdraw(2000));   // "Insufficient funds"
    console.log(account.balance);          // undefined (private!)
*/

function createBankAccount(initialBalance = 0) {
  // Your implementation here
}

// Test cases
const account = createBankAccount(1000);

console.log(account.getBalance());     // Expected: 1000
console.log(account.deposit(500));     // Expected: 1500
console.log(account.withdraw(200));    // Expected: 1300
console.log(account.withdraw(2000));   // Expected: "Insufficient funds" or similar
console.log(account.deposit(-100));    // Expected: Error message
console.log(account.balance);          // Expected: undefined

console.log('\nTransaction History:');
console.log(account.getTransactionHistory());

// Create another account to verify isolation
const account2 = createBankAccount(50);
console.log('\nAccount 2 balance:', account2.getBalance()); // Expected: 50
