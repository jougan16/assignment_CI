function deposit(balance, amount) {
    if (amount <= 0) throw new Error("deposit failed");
    return balance + amount;
}

function withdraw(balance, amount) {
    if (amount <= 0 || amount > balance) throw new Error("withdraw failed");
    return balance - amount;
}

module.exports = { deposit, withdraw };
