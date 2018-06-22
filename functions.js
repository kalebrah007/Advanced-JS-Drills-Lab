function addSquares(a, b) {
  function square(x) {
    return x*x;
  }
  return square(a) + square(b);
} 
let a = addSquares(2, 3);
console.log(a);