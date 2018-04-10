const args = process.argv.slice(2);
const mood = args[0];

// JavaScript naming convention is camelCase.
// whatIsMyName <- camelCase
// WhatIsMyName <- CapCamelCase
// what-is-my-name <- kebab-case
// what_is_my_name <- snake_case

// When creating if-statements, make sure that
// the more specific are at the top.

// In an if statement, the first if-block whose
// condition is true is the only that happens.
if (mood === "happy") {
  console.log("✨😀✨");
} else if (mood === "angry") {
  console.log("Chill, dude!");
} else {
  // Use `else` to create a default condition if
  // all others are false.
  console.log("Ok");
}

// Ternary operator
// <condition> ? <if-true-expr> : <if-false-expr>
// Unlike a if, a ternary operator is an expression
// an returns a value of the code that was run.
mood
  ? console.log(`Your mood is ${mood}`)
  : console.log(`You didn't give me a mood`);

// When using a conditional, you do not need
// to provide an express that returns a boolean.
// If it gets a value other than boolean,
// it will attempt to convert it into a boolean.
// This is called type coercion. This also means
// the language is weakly-typed. To verify how a value
// is converted, use the not operator twice `!!`.\

// Values that coerce to `true` are often named
// "truthy" and values that coerce to `false` are
// often named "falsy".

// For example:
!!0; // returns false
!!"False"; // returns true
!!""; // returns false
!!5; // returns true
!!NaN; // returns false
!!undefined; // returns false
