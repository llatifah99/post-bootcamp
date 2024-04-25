function fizzBuzz(arr) {
  const result = arr.map((e) => {
    if (e % 3 === 0 && e % 5 === 0) {
      return "fizz buzz";
    } else if (e % 3 === 0) {
      return "fizz";
    } else if (e % 5 === 0) {
      return "buzz";
    } else {
      return e;
    }
  });
  return result;
}
const output = fizzBuzz([8, 3, 9, 15, 5]);
console.log(output);
