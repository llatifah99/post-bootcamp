function cariAngka(arr, angka) {
  return arr.find((e) => e === angka);
}
const output = cariAngka([8, 3, 9, 2, 4], 3);
console.log(output);
