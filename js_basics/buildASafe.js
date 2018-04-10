const args = process.argv.slice(2);
const password = args[0];

if (password === undefined) {
  console.log("Password argument required");
} else if (password === "supersecret") {
  console.log("The secret number is: ", 714);
} else {
  console.log("Wrong password!");
}
