let count = 100;

while (count >= 0) {
  console.log(count);
  // count = count - 1;
  // 👇 is syntax sugar for 👆
  // They do the same thing.
  count -= 1;
  // count **= 2;
  // count %= 4;
  // count += 4;

  // count--; // current value of `count` is returned
  // then the variable is decremented by one.
  // --count; // variable is decremented by one
  // then its new value is returned.
}
