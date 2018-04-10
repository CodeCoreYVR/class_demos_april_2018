// `process` holds information about your running
// node program which includes all options
// (or arguments) passed to your script.

// console.log(process.argv);

// `process.argv` returns an Array where the first
// value is a path to your node program and the
// second value is a path to your script file.
// We'll rarely use first 2 values. Instead,
// we'll make use of the ones that come after.

const args = process.argv.slice(2);

console.log(args);

// To get individual arguments from the args array,
// use [] brackets with an index. For example,
// to get the first value in args write `args[0]`
// as shown
console.log("First argument:", args[0]);
console.log("Second argument:", args[1]);
console.log("Third argument:", args[2]);
