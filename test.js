const assert = require('assert');
const { deposit, withdraw } = require('./main');

try {
    console.log("Running Bank Transaction Processor tests...\n");

    // // ✅ VALID TESTS (expected to pass)
    // assert.strictEqual(deposit(0, 100), 100);
    // assert.strictEqual(withdraw(100, 50), 50);

    // ⚠️ INVALID TESTS (expected to handle errors)
    // assert.throws(() => deposit(100, -20), /deposit failed/);
    // assert.throws(() => withdraw(50, 100), /withdraw failed/);

    // ❌ INTENTIONAL FAIL (forces CI failure)
   assert.strictEqual(deposit(0, 100), 999); // purposely wrong

    console.log("\n✅ All tests passed successfully!");

} catch (error) {
    console.error("\n❌ Error while running test:", error.message);
    process.exit(1);
}
