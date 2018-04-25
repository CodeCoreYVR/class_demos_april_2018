// Solution 1
function reverse(string) {
  if(string.length === 0) {
    return '';
  } else {
    return string.slice(-1) + reverse(string.slice(0, string.length - 1));
  }
}

console.log(reverse('hello'));

// solution #2
function reverse(string) {
  if(string.length === 0) {
    return '';
  } else {
    return reverse(string.slice(1)) + string[0];
  }
}

console.log(reverse('hello'));
