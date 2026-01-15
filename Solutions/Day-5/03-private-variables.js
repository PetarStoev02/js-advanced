/*
  Day 5 - Solution: Private Variables (Bank Account)
*/

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  const transactions = [];
  
  function logTransaction(type, amount, newBalance) {
    transactions.push({
      type,
      amount,
      balance: newBalance,
      timestamp: new Date().toISOString()
    });
  }
  
  return {
    deposit(amount) {
      if (amount <= 0) return 'Amount must be positive';
      balance += amount;
      logTransaction('deposit', amount, balance);
      return balance;
    },
    
    withdraw(amount) {
      if (amount <= 0) return 'Amount must be positive';
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      logTransaction('withdrawal', amount, balance);
      return balance;
    },
    
    getBalance() {
      return balance;
    },
    
    getTransactionHistory() {
      return [...transactions];
    }
  };
}

// Test
const account = createBankAccount(1000);
console.log(account.getBalance());     // 1000
console.log(account.deposit(500));     // 1500
console.log(account.withdraw(200));    // 1300
console.log(account.withdraw(2000));   // "Insufficient funds"
console.log(account.balance);          // undefined
console.log(account.getTransactionHistory());
