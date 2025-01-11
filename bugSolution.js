function foo(a, b) {
  // Handle null values by using default values (0 in this case)
  a = (a === null) ? 0 : a;
  b = (b === null) ? 0 : b;
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10

//Alternative solution: throw error
function foo2(a,b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed");
  }
  return a + b;
}
//console.log(foo2(null,5)); //Throws error
console.log(foo2(5,5));//Output: 10