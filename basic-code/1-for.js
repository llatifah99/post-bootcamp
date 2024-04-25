function cariAngka(arr, angka) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === angka) {
      return angka;
    }
  }
  return undefined;
}

const output = cariAngka([8, 3, 9, 2, 5], 1);
console.log(output);
