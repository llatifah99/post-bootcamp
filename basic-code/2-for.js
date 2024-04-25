function fizzBuzz(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result.push("fizz buzz");
    } else if (arr[i] % 3 === 0) {
      result.push("fizz");
    } else if (arr[i] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
const output = fizzBuzz([8, 3, 9, 15, 5]);
console.log(output);
