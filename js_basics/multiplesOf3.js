// The `for` keyword is another way to do iteration.
// We can do anything we can with `while` with a
// a `for` loop and vice versa.
// It allows to declared variables, a condition and
// code that will eventually terminate the loop
// inside the declaration of the loop itself.

// for (
//   <variables>;
//   <condition>;
//   <code-that-changes-variables>
// ) { ... }

for (let i = 0; i <= 100; i += 3) {
  console.log(`Mambo No. ${i}`);
}
